import { Typography, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Appbar from "../Navigation/IactAppBar";
import Container from "../Verktyg/VerktygContainer";

function NotFound() {
  return (
    <div>
      <Appbar />
      <Container>
        <Typography variant="h5" sx={{ mt: 10 }}>
          {" "}
          Oj! något blev visst tokigt....{" "}
        </Typography>
        <Typography>
          Sidan du sökte gick inte att hitta. Vi ber om ursäkt, hemsidan är
          under konstruktion så mycket som inte fungerar som det ska ännu.
        </Typography>
        <Button sx={{ mt: 5 }} component={Link} to="/" variant="outlined">
          Gå tillbaka till startsidan
        </Button>
      </Container>
    </div>
  );
}

export default NotFound;
