#!/bin/bash

$YELLOW='\e[1;33m'
$NC='\e[0m' # No Colour

if [ -d $HOME/Finatlon-Prototype ]; then
    echo -e "${YELLOW}UPDATING the repository${NC}"
    cd $HOME/Finatlon-Prototype
    git pull
else
    read -p "Directory not found. Proceed with cloning? [y/n] " prompt
    if [[ $prompt == "y" || $prompt == "Y" ]]; then
        echo -e "${YELLOW}CLONING the repository${NC}"
        git clone "https://github.com/misha1350/Finatlon-Prototype"
    else
        exit 1
    fi
fi

npm run dev