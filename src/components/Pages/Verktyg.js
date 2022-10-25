import { Container } from "@mui/system";
import React from "react";
import AppBar from "../AppBar";
import { Link } from "react-router-dom";
function Verktyg() {
  return (
    <>
      <AppBar />
      <Container sx={{ pt: "60px" }}>
        <h1> Verktyg</h1>
        <Link to="/verktyg/UtmanaNegativaAutomatiskaTankar">
          {" "}
          Utmana Negativa Automatiska Tankar
        </Link>
      </Container>
    </>
  );
}

export default Verktyg;
