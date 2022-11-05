import { Container } from "@mui/system";
import React from "react";
import AppBar from "../AppBar";
import { Link } from "react-router-dom";
import { Box, Button, Divider, Grid, Paper, Typography } from "@mui/material";
import ToolsCard from "../Saker/SmattOchGott/ToolsCard";
import useTheme from "@mui/material/styles/useTheme";
import useMediaQuery from "@mui/material/useMediaQuery";

function Verktyg() {
  const bigScreen = useMediaQuery("(mind-width:300px)");
  const theme = useTheme();
  const readMoreClick = (toRead) => {
    console.log(toRead);
  };

  const movies = [
    "/breaking-bad.webp",
    "/the-leftovers.jpg",
    "/game-of-thrones.jpg",
    "/true-detective.jpg",
    "/walking-dead.jpg",
  ];

  const skattningar = [
    {
      title: "Ångest",
      desc: "Testa hur din generella ångestnivå är just nu",
      startLink: "/verktyg/skattning/gad7",
    },
    {
      title: "Derpression",
      desc: "Testa hur din generella ångestnivå är just nu",
      startLink: "/verktyg/skattning/gad7",
    },
    {
      title: "Något annat",
      desc: "Testa hur din generella ångestnivå är just nu",
      startLink: "/verktyg/skattning/gad7",
    },
    {
      title: "Något annat",
      desc: "Testa hur din generella ångestnivå är just nu",
      startLink: "/verktyg/skattning/gad7",
    },
    {
      title: "Något annat",
      desc: "Testa hur din generella ångestnivå är just nu",
      startLink: "/verktyg/skattning/gad7",
    },
  ];

  return (
    <>
      <AppBar />
      <Container
        sx={{
          pt: { xs: 3, sm: "60px" },
          backgroundColor: theme.palette.customGrey.main,
          minHeight: "100vh",
        }}
      >
        <Typography variant="h6" sx={{ mt: 5, opacity: "50%" }}>
          Verktyg
        </Typography>
        <Divider sx={{ mb: 1 }}></Divider>

        <Grid container>
          <ToolsCard
            title={"Utmana dina tankar"}
            desc={"En övning där du får träna på att nyansera ditt tänkande."}
            startLink="/verktyg/UtmanaNegativaAutomatiskaTankar/0"
          />
        </Grid>
        <Typography variant="h6" sx={{ mt: 5, opacity: "50%" }}>
          Skattningar
        </Typography>
        <Divider sx={{ mb: 1 }}></Divider>

        <Grid container spacing={1}>
          <ToolsCard
            title={"Ångest"}
            desc={"Testa hur din generella ångestnivå är just nu"}
            startLink="/verktyg/skattning/gad7"
          />
          <ToolsCard
            title={"Ångest"}
            desc={"Testa hur din generella ångestnivå är just nu"}
            startLink="/verktyg/skattning/gad7"
          />
          <ToolsCard
            title={"Ångest"}
            desc={"Testa hur din generella ångestnivå är just nu"}
            startLink="/verktyg/skattning/gad7"
          />
        </Grid>
        <Button
          variant="outlined"
          sx={{ mt: 10, mb: 10 }}
          component={Link}
          to="/verktyg/UtmanaNegativaAutomatiskaTankar/visa"
        >
          {" "}
          Se genomförda övningar{" "}
        </Button>

        <>
          <Box className={bigScreen ? null : "container"} sx={{ pb: 10 }}>
            {skattningar.map((item, index) => (
              <Box className={bigScreen ? null : "card"} key={index}>
                <ToolsCard
                  title={item.title}
                  desc={item.desc}
                  startLink={item.startLink}
                />
              </Box>
            ))}
          </Box>
        </>
      </Container>
    </>
  );
}

export default Verktyg;
