import { Box, Typography, Stack } from "@mui/material";
import { ComicCard } from "../ui/ComicCard/ComicCard";

export const HistoryView = () => {
  return (
    <Box sx={{ width: "100%", maxWidth: "1200px" }}>
      <Typography
        variant="h4"
        color="#fb8500"
        gutterBottom
        align="center"
        sx={{ mb: 4, textShadow: "2px 2px 4px black" }}
      >
        Cómics canónicos
      </Typography>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={4}
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
      >
        <ComicCard
          title="El Origen"
          image="https://via.placeholder.com/300x200/240046/ffffff?text=Comic+1"
          description="Descubre cómo Mr. Monch llegó desde las estrellas."
        />
        <ComicCard
          title="La Batalla del Sabor"
          image="https://via.placeholder.com/300x200/38b000/ffffff?text=Comic+2"
          description="Un enfrentamiento épico contra la comida desabrida."
        />
        <ComicCard
          title="Viaje Galáctico"
          image="https://via.placeholder.com/300x200/ff006e/ffffff?text=Comic+3"
          description="Aventuras a través del cosmos buscando ingredientes."
        />
      </Stack>
    </Box>
  );
};
