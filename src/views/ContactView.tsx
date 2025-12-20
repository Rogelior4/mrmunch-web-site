import { Box, Typography, Paper } from "@mui/material";

export const ContactView = () => {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h4" color="#fb8500" gutterBottom>
        Pedidos y Eventos
      </Typography>
      <Paper elevation={6} sx={{ p: 4, mt: 2, borderRadius: 4 }}>
        <Typography variant="h6">WhatsApp: +52 555-0000</Typography>
      </Paper>
    </Box>
  );
};
