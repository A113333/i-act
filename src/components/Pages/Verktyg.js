import { Container } from "@mui/system";
import React from "react";
import AppBar from "../IactAppBar";
import { Link } from "react-router-dom";
import { Box, Button, Divider, Grid, Paper, Typography } from "@mui/material";
import ToolsCard from "../Saker/SmattOchGott/ToolsCard";
import useTheme from "@mui/material/styles/useTheme";
import useMediaQuery from "@mui/material/useMediaQuery";

function Verktyg() {
  // window.scrollTo(0, 0);
  const bigScreen = useMediaQuery("(min-width:400px)");
  const theme = useTheme();
  const readMoreClick = (toRead) => {
    console.log(toRead);
  };

  const skattningar = [
    {
      title: "Ångest",
      desc: "Testa hur din generella ångestnivå är just nu",
      startLink: "/verktyg/skattning/gad7",
    },
    {
      title: "Depression",
      desc: "Testa dina depressionsnivåer just nu",
      startLink: "/verktyg/skattning/madras-s",
    },
    {
      title: "Något annat",
      desc: "Testa något annat",
      startLink: "/verktyg/skattning/gad7",
    },
    {
      title: "Något annat",
      desc: "Testa något annat",
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
          pt: 3,
          backgroundColor: theme.palette.customGrey.main,
          minHeight: "100vh",
        }}
      >
        <Typography variant="h6" sx={{ opacity: "50%" }}>
          Övningar
        </Typography>
        <Divider sx={{ mb: 1 }}></Divider>

        <Grid container>
          <Grid item xs={12} sm={6} md={4}>
            <ToolsCard
              title={"Utmana dina tankar"}
              desc={"En övning där du får träna på att nyansera ditt tänkande."}
              startLink="/verktyg/UtmanaNegativaAutomatiskaTankar/0"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ToolsCard
              title={"Funktionell analys, SORKK"}
              desc={""}
              startLink="/verktyg/sorkk/0"
            />
          </Grid>
        </Grid>

        <Typography variant="h6" sx={{ mt: 5, opacity: "50%" }}>
          Skattningar
        </Typography>
        <Divider sx={{ mb: 1 }}></Divider>
        {bigScreen ? (
          <>
            <Grid container spacing={1} direction={"row"}>
              {" "}
              {skattningar.map((item, index) => (
                <>
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <ToolsCard
                      title={item.title}
                      desc={item.desc}
                      startLink={item.startLink}
                    />
                  </Grid>
                </>
              ))}
            </Grid>
          </>
        ) : (
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
        )}

        <Box sx={{ mt: 10, mb: 10, ml: 2 }}>
          <Button
            sx={{ ml: 1, mt: 1 }}
            variant="outlined"
            component={Link}
            to="/verktyg/UtmanaNegativaAutomatiskaTankar/visa"
          >
            Se genomförda övningar
          </Button>
          <Button
            sx={{ ml: 1, mt: 1 }}
            variant="outlined"
            onClick={() => {
              localStorage.removeItem("GAD7");
              console.log(localStorage.getItem("GAD7"));
            }}
          >
            Ta bort alla gad7
          </Button>
          <Button
            sx={{ ml: 1, mt: 1 }}
            variant="outlined"
            onClick={() => {
              localStorage.removeItem("utmanaNat");
            }}
          >
            Ta bort alla NAT
          </Button>
        </Box>
      </Container>
    </>
  );
}

export default Verktyg;
