import { Container } from "@mui/system";
import React from "react";
import AppBar from "../AppBar";
import { Link } from "react-router-dom";
import { Button, Paper, Typography } from "@mui/material";

function Verktyg() {
  const readMoreClick = (toRead) => {
    console.log(toRead);
  };
  return (
    <>
      <AppBar />
      <Container
        sx={{
          pt: "60px",
          backgroundColor: "#f5f5f5",
          minHeight: "100vh",
        }}
      >
        <h1> Verktyg</h1>
        <Paper
          sx={{
            p: 2,
            width: { xs: "90%", sm: "40%" },
            m: { xs: "auto", sm: 0 },
          }}
        >
          <Typography sx={{ fontWeight: 700 }}> Utmana dina tankar</Typography>
          <Typography>
            {" "}
            En övning där du får träna på att nyansera ditt tänkande.
            <Button
              sx={{ color: "#707d8b", fontWeight: 500 }}
              onClick={() => readMoreClick("utmanaNat")}
            >
              {" "}
              Läs mer{" "}
            </Button>
          </Typography>
          <Button
            variant="outlined"
            component={Link}
            to="/verktyg/UtmanaNegativaAutomatiskaTankar/0"
          >
            Starta övningen
          </Button>
        </Paper>

        <Button
          variant="outlined"
          sx={{ mt: 10 }}
          variant="outlined"
          component={Link}
          to="/verktyg/UtmanaNegativaAutomatiskaTankar/visa"
        >
          {" "}
          Se genomförda övningar{" "}
        </Button>
      </Container>
    </>
  );
}

export default Verktyg;
