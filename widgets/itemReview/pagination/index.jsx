import React, { useEffect, useState } from "react";
import { Box, Pagination } from "@mui/material";
import service from "../../../pages/reviews/services";

const pageSize = 3;

export default function AppPagination({setCards}) {
    const [pagination, setPagination] = useState({
        count: 0,
        from: 0,
        to: pageSize
    });

    useEffect(() => {
        service.getData({ from: pagination.from, to: pagination.to }).then(response => {
            setPagination({ ...pagination, count: response.count });
            setCards(response.data);
        });
}, [pagination.from, pagination.to]);
     
    const handlePageChange = (event, page) => {
        const from = (page - 1) * pageSize;
        const to = (page - 1) * pageSize + pageSize;

        setPagination({ ...pagination, from: from, to: to });
    }
    
    return (
        <Box justifyContent="center" alignItems="center" display="flex" >
            <Pagination
                color='primary'
                size="large"
                count={Math.ceil(pagination.count / pageSize)}
                onChange={handlePageChange}
            ></Pagination>


        </Box>
    ); 
};