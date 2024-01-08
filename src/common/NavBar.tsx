import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { themePalette } from "../config/theme.config";
import logo from "../assets/splendid-high-resolution-logo.svg";

export const NavBar: React.FC<{}> = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: themePalette.BG }}>
        <Toolbar>
          <Container maxWidth="xl">
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item>
                {/* <img
                  src={logo}
                  alt="logo"
                  style={{
                    height: "3.5rem",
                    maxWidth: "auto",
                    marginTop: "0.5rem",
                  }}
                /> */}
                <Typography
                  variant="h4"
                  style={{
                    fontFamily: themePalette.SPLEN,
                    color: themePalette.ACCENT,
                  }}
                >
                  spLENDid
                </Typography>
              </Grid>
              <Grid item>
                <Stack direction="row" spacing={2}>
                  <Button variant="text">Text</Button>
                  <Button variant="outlined">Outlined</Button>
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: themePalette.BUTTONS }}
                  >
                    Contained
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
