import React from "react";
import {
  Container,
  Grid,
  Typography,
  Button,
  TextField,
  Box,
} from "@mui/material";
import coverCut from "../../assets/comicCut.png";
import { themePalette } from "../../config/theme.config";

export const HomePage: React.FC<{}> = () => {
  const [searchData, setSearchData] = React.useState<string>();

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSearchData(event.target.value);
  };

  const handleSearch = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    console.log("Esto es el estado:", searchData);
  };

  return (
    <Container>
      <Grid container spacing={8}>
        <Grid item xs={12} md={6} mt={10}>
          <Box>
            <img
              src={coverCut}
              alt="Comic City high contrast"
              style={{ height: "32rem", maxWidth: "100vh" }}
            />
          </Box>
        </Grid>

        <Grid item xs={12} md={6} mt={30}>
          <Box textAlign="center">
            <Typography
              variant="h4"
              color={themePalette.ACCENT}
              fontFamily={themePalette.BIG}
            >
              Renta
            </Typography>
            <Typography
              variant="h4"
              color={themePalette.BUTTONS}
              fontFamily={themePalette.BIG}
            >
              lo que quieras
            </Typography>
            <Typography
              variant="h4"
              color={themePalette.ACCENT}
              fontFamily={themePalette.BIG}
            >
              en tu comunidad
            </Typography>
          </Box>

          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            mt={5}
            // style={{ position: "sticky", top: 1 }}
          >
            <TextField
              variant="outlined"
              fullWidth
              type="search"
              name="searchData"
              onChange={handleChange}
              label={
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: "Nunito",
                    color: "primary",
                    fontSize: "15px",
                  }}
                >
                  Encuentra lo que estás buscando
                </Typography>
              }
            />

            <Button
              variant="outlined"
              sx={{ marginLeft: "-6.5rem" }}
              onClick={handleSearch}
            >
              Search
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ height: "50rem" }}></Box>
    </Container>
  );
};
