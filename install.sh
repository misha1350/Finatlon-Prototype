#!/bin/bash

$YELLOW='\e[1;33m'
$NC='\e[0m' # No Colour

# Clone the git repository
echo -e "${YELLOW}Cloning 'Finatlon-Prototype' repository${NC}"
git clone https://github.com/Finatlon/Finatlon-Prototype

# Install necessary packages on CentOS 8
dnf upgrade -y
# Check if nodejs is installed
echo -e "${YELLOW}Происходит установка Node.js${NC}"
dnf module list nodejs
dnf module install nodejs:16 -y
# Install nginx
echo -e "${YELLOW}Происходит установка nginx${NC}"
rpm -i http://nginx.org/packages/mainline/centos/8/x86_64/RPMS/nginx-1.23.3-1.el8.ngx.x86_64.rpm

# Configuring Nginx
# Create a directory if it does not exist (sometimes it isn't automatically created)
echo -e "${YELLOW}Конфигурация nginx${NC}"
mkdir -p /etc/nginx/sites-available
touch /etc/nginx/sites-available/Finatlon.conf
tee /etc/nginx/sites-available/Finatlon.conf > /dev/null <<EOF
server {
    listen 8080 default_server;
    server_name _;

   # root /home/centos/Finatlon-Prototype;

    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
    }

     location /_next/static/ {
        expires 1d;
        add_header Cache-Control "public, max-age=86400, immutable";
        proxy_pass http://localhost:3000;
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
    }

    location /static {
       root /home/centos/Finatlon-Prototype/public;
       expires 1d;
       add_header Cache-Control "public, max-age=86400, immutable";
   }
}
EOF

# Configuring nginx for the website
tee /etc/nginx/nginx.conf > /dev/null <<EOF
user  nginx;
worker_processes  auto;

error_log  /var/log/nginx/error.log notice;
pid        /var/run/nginx.pid;


events {
    worker_connections  1024;
}


http {
    include       /etc/nginx/mime.types;
    #include /etc/nginx/conf.d/*.conf;
    include /etc/nginx/sites-available/*.conf;
    default_type  application/octet-stream;

    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  /var/log/nginx/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    keepalive_timeout  65;

    #gzip  on;

    include /etc/nginx/conf.d/*.conf;
    proxy_buffers 8 16k;
    proxy_buffer_size 32k;
}
EOF

# Configuring default nginx config just to be sure
tee /etc/nginx/conf.d/default.conf > /dev/null <<EOF
server {
    listen       8080;
    server_name  localhost;

    #access_log  /var/log/nginx/host.access.log  main;

    location / {
        root   /usr/share/nginx/html;
        index  index.html index.htm;
    }

    #error_page  404              /404.html;

    # redirect server error pages to the static page /50x.html
    #
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }

    # proxy the PHP scripts to Apache listening on 127.0.0.1:80
    #
    #location ~ \.php$ {
    #    proxy_pass   http://127.0.0.1;
    #}

    # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
    #
    #location ~ \.php$ {
    #    root           html;
    #    fastcgi_pass   127.0.0.1:9000;
    #    fastcgi_index  index.php;
    #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
    #    include        fastcgi_params;
    #}

    # deny access to .htaccess files, if Apache's document root
    # concurs with nginx's one
    #
    #location ~ /\.ht {
    #    deny  all;
    #}
}
EOF

# Configuring SELinux
echo -e "${YELLOW}Конфигурация SELinux${NC}"
semanage port --list
semanage port --add --type http_port_t --proto tcp 8080
setsebool -P httpd_can_network_connect on

ln -s /etc/nginx/sites-available/Finatlon /etc/nginx/sites-enabled/
nginx -t
systemctl restart nginx

echo "${GREEN}Теперь запустите npm run dev и проверьте работу${NC}"