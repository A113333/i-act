import { Container } from "@mui/system";
import React from "react";
import AppBar from "../Navigation/IactAppBar";
import { Link } from "react-router-dom";
import { Box, Button, Divider, Grid, Paper, Typography } from "@mui/material";
import ToolsCard from "../Verktyg/ToolsCard";
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
      title: "GAD7",
      desc: "Testa hur din generella ångestnivå är just nu",
      startLink: "/verktyg/skattning/gad7",
      resultsLink: "/verktyg/skattning/gad7/resultat",
      readMoreTitle: "Ångest",
      readMoreText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      title: "PHQ9",
      desc: "Testa dina depressionsnivåer just nu",
      startLink: "/verktyg/skattning/PHQ9",
      resultsLink: "/verktyg/skattning/PHQ9/resultat",
      readMoreTitle: "Depression",
      readMoreText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },

    {
      title: "MADRA-S",
      desc: "Testa dina depressionsnivåer just nu",
      startLink: "/verktyg/skattning/madras-s",
      resultsLink: "/verktyg/skattning/madras-s/resultat",
      readMoreTitle: "Depression",
      readMoreText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      title: "LSAS-SR",

      desc: "Testa hur mycket symptom du har för social fobi",
      startLink: "/verktyg/skattning/LSAS-SR",
      resultsLink: "/verktyg/skattning/LSAS-SR/resultat",
      readMoreTitle: "Social fobi",
      readMoreText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];

  const ovningar = [
    {
      title: "Utmana dina tankar",
      desc: "Träna på att nyansera ditt tänkande.",
      startLink: "/verktyg/UtmanaNegativaAutomatiskaTankar/0",
      resultsLink: "/verktyg/UtmanaNegativaAutomatiskaTankar/visa",
      readMoreTitle: "Utmana dina tankar",
      readMoreText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },

    {
      title: "SORKK",
      desc: "Analyser siatuationer för att bättre förstå dina reaktioner",
      startLink: "/verktyg/ovning/SORKK/0",
      readMoreTitle: "Funktionell analys, SORKK",
      resultsLink: "/verktyg/ovning/resultat/SORKK",
      readMoreText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    /*  { 
      title: "Skapa en egen övning",
      desc: "Gör en egen övning",
      startLink: "/verktyg/ovning/skapaegen",
      readMoreTitle: "Gör din egna övning",
      resultsLink: "/verktyg/ovning/resultat/SORKK",
      readMoreText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    }, */

    {
      title: "Tankeobservation",
      desc: "Skriv ner dina tankar och känslor för en situation",
      startLink: "/verktyg/ovning/tankeobservation",
      readMoreTitle: "Tankeobservation",
      resultsLink: "/verktyg/ovning/resultat/tankeobservation",
      readMoreText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },

    {
      title: "Kort värderingsövning",
      desc: "Hitta dina tre viktigaste värderingsord",
      startLink: "/ListaVardingersOrd",
      readMoreTitle: "Värderingar",
      resultsLink: "/verktyg/ovning/resultat/ListaVardingersOrd",
      readMoreText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];

  return (
    <>
      <AppBar />
      <Container
        sx={{
          pt: 2,
          pb: 3,
          backgroundColor: theme.palette.customGrey.main,
          minHeight: "100vh",
          maxWidth: "1130px",
          mt: "65px",
        }}
      >
        <Typography variant="h6" sx={{ opacity: "50%" }}>
          Övningar
        </Typography>
        <Divider sx={{ mb: 1 }}></Divider>
        <Grid container>
          {ovningar.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ToolsCard
                title={item.title}
                desc={item.desc}
                startLink={item.startLink}
                resultsLink={item.resultsLink}
                readMoreTitle={item.readMoreTitle}
                readMoreText={item.readMoreText}
              />
            </Grid>
          ))}
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
                      resultsLink={item.resultsLink}
                      readMoreTitle={item.readMoreTitle}
                      readMoreText={item.readMoreText}
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
                    resultsLink={item.resultsLink}
                    readMoreText={item.readMoreText}
                    readMoreTitle={item.readMoreTitle}
                  />
                </Box>
              ))}
            </Box>
          </>
        )}

        {/*         <Box sx={{ mt: 10, mb: 10, ml: 2 }}>
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
        </Box> */}
      </Container>
    </>
  );
}

export default Verktyg;
