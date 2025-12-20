import { Box, Typography, Stack, Button } from "@mui/material";

export const MusicView = () => {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h4" color="#fb8500" gutterBottom>
        Videoclips y Streaming
      </Typography>
      <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 4 }}>
        {["Spotify", "YouTube", "Apple Music"].map((red) => (
          <Button
            key={red}
            variant="contained"
            color="secondary"
            sx={{ color: "black", fontWeight: "bold" }}
          >
            {red}
          </Button>
        ))}
      </Stack>
    </Box>
  );
};
