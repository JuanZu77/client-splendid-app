import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import React from "react";

type ThemeProp = {
  children: JSX.Element;
};

export enum themePalette {
  // casi blanco
  BG = "#F4F5F6",
  // rosita
  LOGO = "#FF7873",
  // gris
  BORDERS = "#696969",
  // celeste
  BUTTONS = "#219A9D",
  // naranja
  ACCENT = "#EB7C49",
  // fuente grande
  BIG = "Bangers",
  // fuente default
  DEF = "Nunito",
}

const theme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: themePalette.BG,
    },
    primary: {
      main: themePalette.BORDERS,
    },
    secondary: {
      main: themePalette.LOGO,
    },
    info: {
      main: themePalette.ACCENT,
    },
    text: {
      primary: themePalette.BORDERS,
    },
  },
  typography: {
    fontFamily: ["Nunito", "Bangers", "Arial", "sans-serif"].join(","),
    fontSize: 20,
  },
  components: {
    MuiButton: {
      defaultProps: {
        style: {
          //   background: `${themePalette.BUTTONS}`,
          textTransform: "none",
          border: `3px solid ${themePalette.BORDERS}`,
          borderRadius: "revert-layer",
        },
      },
    },
  },
});

export const ThemeConfig: React.FC<ThemeProp> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
