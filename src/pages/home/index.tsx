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
  return (
    <Container>
      <Grid container spacing={8}>
        <Grid item xs={12} md={6} mt={10}>
          <Box>
            <img
              src={coverCut}
              alt="Comic City high contrast"
              style={{ height: "34rem", maxWidth: "100vh" }}
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
          {/* Search bar */}
          <Box display="flex" alignItems="center" mt={5}>
            <TextField
              variant="outlined"
              fullWidth
              label={
                <Typography
                  variant="body1"
                  style={{
                    fontFamily: "Nunito",
                    color: "primary",
                    fontSize: "15px",
                  }}
                >
                  Encuentra lo que estas buscando
                </Typography>
              }
            />
            {/* <TextField variant="outlined" fullWidth /> */}
            <Button variant="outlined" sx={{ marginLeft: "-6.5rem" }}>
              Search
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ height: "50rem" }}></Box>
    </Container>
  );
};
