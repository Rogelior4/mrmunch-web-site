import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ff006e",
    },
    secondary: {
      main: "#38b000",
    },
    background: {
      default: "#1a1a2e",
      paper: "rgba(255, 255, 255, 0.1)",
    },
    text: {
      primary: "#ffffff",
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
    h1: { fontWeight: "bold" },
    button: { textTransform: "none", fontWeight: "bold" },
  },
});
