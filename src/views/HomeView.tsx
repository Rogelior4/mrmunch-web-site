import { Box, Typography } from "@mui/material";

export const HomeView = () => {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography
        variant="h3"
        color="#fb8500"
        gutterBottom
        sx={{ textShadow: "2px 2px 4px black" }}
      >
        ¡Bienvenido al mundo de Mr. Monch!
      </Typography>
      <Typography variant="h6">
        Selecciona una opción del menú para comenzar la experiencia.
      </Typography>
    </Box>
  );
};
