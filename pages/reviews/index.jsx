import { TextRotationAngleupSharp } from "@mui/icons-material";
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
const Review = () => {
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
      <ItemReview />
      <ItemReview />
      <ItemReview />
      <Box display="flex" alignItems="center" justifyContent="center">
        <Pagination count={10} size="large" color="primary" />
      </Box>
      <Box display="flex" alignItems="center" justifyContent="center">
        {" "}
        <MultilineTextFields />{" "}
      </Box>
    </Container>
  );
};

export default Review;
