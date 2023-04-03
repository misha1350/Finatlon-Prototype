import * as React from "react";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import { color } from "@mui/system";
import { Button } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function MultilineTextFields() {
  return (
    <Box
      maxWidth="md"
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "40ch" },
        mt: 8,
        mb: 16,
      }}
      noValidate
      autoComplete="off"
    >
      <Typography variant="h4" textAlign="center" sx={{ mb: 4 }}>
        Оставить отзыв
      </Typography>
      <Grid
        alignItems="center"
        justifyContent="center"
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item xs={6}>
          <InputLabel sx={{ ml: 2, color: "black" }}>ФИО</InputLabel>
          <TextField
            id="outlined-multiline-flexible"
            label="Петров Иван Сергеевич"
            multiline
            maxRows={4}
          />
        </Grid>
        <Grid item xs={6}>
          <InputLabel sx={{ ml: 2, color: "black" }}>Заголовок</InputLabel>
          <TextField
            id="outlined-textarea"
            label="Олимпиада"
            placeholder="Placeholder"
            multiline
          />
        </Grid>
        <Grid item xs={6}>
          <InputLabel sx={{ ml: 2, color: "black" }}>Email</InputLabel>
          <TextField
            id="outlined-multiline-flexible"
            label="Example@gmail.com"
            multiline
            maxRows={4}
          />
        </Grid>
        <Grid item xs={6}>
          <InputLabel sx={{ ml: 2, color: "black" }}>Отзыв</InputLabel>
          <TextField
            id="outlined-multiline-static"
            label="Отзыв"
            multiline
            rows={4}
            defaultValue=""
          />
        </Grid>
        <Grid item xs={6}>
          <InputLabel sx={{ ml: 2, color: "black" }}>Номер</InputLabel>
          <TextField
            id="outlined-multiline-flexible"
            label="+7 945 456 23 51"
            multiline
            maxRows={4}
          />
        </Grid>
        <Grid
          item
          xs={6}
          container
          direction="row"
          justifyContent="center"
          alignItems="flex-end"
        >
          <Button
            variant="contained"
            sx={{
              bgcolor: "grey",
              ":hover": { bgcolor: "grey{500}" },
              mr: 2,
              mt: 4,
            }}
          >
            Отменить
          </Button>
          <Button
            variant="contained"
            sx={{ bgcolor: "grey", ":hover": { bgcolor: "grey{500}" } }}
          >
            Сохранить
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
