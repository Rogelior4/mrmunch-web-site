import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { CssBaseline, ThemeProvider, GlobalStyles } from "@mui/material";
import { theme } from "./theme/theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          body: {
            backgroundImage:
              "radial-gradient(circle at center, #240046 0%, #10002b 100%)",
            backgroundAttachment: "fixed",
            minHeight: "100vh",
          },
        }}
      />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
