import { Box, Stack, Typography } from "@mui/material";
import { NeonButton } from "../Buttons/NeonButton";
import personaje from "../../assets/personaje.png";

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string) => void;
}

export const Navbar = ({ currentView, onNavigate }: NavbarProps) => {
  const isHome = currentView === "inicio";
  const neonGreen = "#38b000";

  return (
    <Box
      component="nav"
      sx={{
        p: 2,
        backgroundColor: "#16213e",
        borderBottom: "3px solid #7b2cbf",
        boxShadow: "0 0 15px rgba(123, 44, 191, 0.5)",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        position: "sticky",
        top: 0,
        zIndex: 10,
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        spacing={2}
        onClick={() => onNavigate("inicio")}
        sx={{
          cursor: "pointer",
          transition: "transform 0.2s ease-in-out",
          "&:hover": { transform: "scale(1.05)" },
        }}
      >
        <Box
          component="img"
          src={personaje}
          alt="Logo"
          sx={{
            height: 70,
            width: "auto",
            borderRadius: "50%",

            border: isHome ? "2px solid #fff" : `2px solid ${neonGreen}`,

            boxShadow: isHome
              ? `0 0 15px ${neonGreen}, 0 0 30px ${neonGreen}`
              : "none",
            transition: "all 0.3s ease",
          }}
        />
        <Typography
          variant="h4"
          sx={{
            color: isHome ? "#ffffff" : neonGreen,
            fontWeight: "bold",

            textShadow: isHome
              ? `0 0 5px ${neonGreen}, 0 0 20px ${neonGreen}, 0 0 40px ${neonGreen}`
              : "2px 2px 4px black",
            transition: "all 0.3s ease",
          }}
        >
          Mr.MonchiesMonch
        </Typography>
      </Stack>

      <Stack
        direction="row"
        spacing={2}
        flexWrap="wrap"
        justifyContent="center"
      >
        <NeonButton
          onClick={() => onNavigate("Historia")}
          active={currentView === "Historia"}
        >
          Historia
        </NeonButton>
        <NeonButton
          onClick={() => onNavigate("Música")}
          active={currentView === "Música"}
        >
          Música
        </NeonButton>
        <NeonButton
          onClick={() => onNavigate("Ponte monchoso")}
          active={currentView === "Ponte monchoso"}
        >
          Ponte Monchoso
        </NeonButton>
      </Stack>
    </Box>
  );
};
