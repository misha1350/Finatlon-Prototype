import { TextRotationAngleupSharp } from "@mui/icons-material";
import { useState } from "react";
import { useRouter } from "next/router";
import {
  createTheme,
  Typography,
  Breadcrumbs,
  Pagination,
  Grid,
  Box,
} from "@mui/material";
import { Container } from "@mui/system";
import ItemReview from "../../widgets/itemReview/card";
import CustomSeparator from "../../widgets/itemReview/Breadcrumb";
import MultilineTextFields from "../../widgets/itemReview/text-field";
import MyComponent from "../../widgets/itemReview/pagination/index";
import AppPagination from "../../widgets/itemReview/pagination/index";
const Review = () => {
  const[cards, setCards] = useState([]);
  
  
  return (

 


    <Container>
      <CustomSeparator />
      <Typography
        variant="h4"
        flexDirection="row"
        textAlign="center"
        fontSize="2rem"
        fontWeight="600"
      >
        Отзывы
      </Typography>
      {cards.map((card) => {
        return (<ItemReview {...card} />) 
      })}

      {/* <ItemReview /> */}
      {/* <ItemReview /> */}
      {/* <ItemReview /> */}
       <AppPagination setCards={(p)=>setCards(p)} />  
      {/* <Box display="flex" alignItems="center" justifyContent="center"> */}
        {/* <Pagination count="10" */}
        {/* variant='outlined' */}
        {/* color='primary' */}
        {/* className='pagination' */}
       {/* size="large"  /> */}
      {/* </Box> */}
      {/* <Box display="flex" alignItems="center" justifyContent="center"> */}
        {/* {" "} */}
        <MultilineTextFields />{" "}
      {/* </Box> */}
      {/* {cards.map((card) => {
        console.log(card.name)
      })} */}




    </Container>
  );
};

export default Review;
