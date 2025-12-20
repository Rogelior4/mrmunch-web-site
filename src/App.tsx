import { useState } from "react";
import { Box, Container, Fade } from "@mui/material";

import { Navbar } from "./ui/Navbar/Navbar";
import { HomeView } from "./views/HomeView";
import { HistoryView } from "./views/HistoryView";
import { MusicView } from "./views/MusicView";
import { ContactView } from "./views/ContactView";

function App() {
  const [vista, setVista] = useState("inicio");

  const renderCurrentView = () => {
    switch (vista) {
      case "Historia":
        return <HistoryView />;
      case "Música":
        return <MusicView />;
      case "Ponte monchoso":
        return <ContactView />;
      default:
        return <HomeView />;
    }
  };

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar currentView={vista} onNavigate={setVista} />

      <Container
        sx={{
          flex: 1,
          py: 6,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Fade in={true} key={vista} timeout={600}>
          <Box width="100%" display="flex" justifyContent="center">
            {renderCurrentView()}
          </Box>
        </Fade>
      </Container>
    </Box>
  );
}

export default App;
