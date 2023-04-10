import { Message, ThumbUp, ThumbDownAlt, MoreVert } from "@mui/icons-material";
import {
  Avatar,
  Card,
  Box,
  Button,
  Grid,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import { cards } from "../../pages/reviews/services/cards";

const ItemReview = (props) => {
  console.log(props)
  return (
    <Card sx={{ margin: 5 }}>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: "grey" }} aria-label="recipe"></Avatar>}
        title={props.name}
        subheader={props.data}
      />
      <CardMedia component="img" height="20%" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.review}
          {/* Спасибо организатору и руководителям за такую замечательную олимпиаду!
          Мне было интересно поучаствовать. Я думаю, что олимпиада будет еще
          набирать популярность среди учеников 9-11 классов... */}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="ThumbUp">
          <Checkbox
            icon={<ThumbUp />}
            checkedIcon={<ThumbUp sx={{ color: "grey{500}" }} />}
          />
        </IconButton>
        <IconButton aria-label="ThumbDownAlt">
          <Checkbox
            icon={<ThumbDownAlt />}
            checkedIcon={<ThumbDownAlt sx={{ color: "grey{500}" }} />}
          />
        </IconButton>
        <IconButton aria-label="Message">
          <Checkbox
            icon={<Message />}
            checkedIcon={<Message sx={{ color: "grey{500}" }} />}
          />
        </IconButton>
        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="flex-end"
        >
          <Button
            variant="contained"
            sx={{ bgcolor: "grey", ":hover": { bgcolor: "grey{500}" }, mr: 2 }}
          >
            Ответить
          </Button>
          <Button
            variant="contained"
            sx={{ bgcolor: "grey", ":hover": { bgcolor: "grey{500}" } }}
          >
            Подробнее
          </Button>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default ItemReview;
