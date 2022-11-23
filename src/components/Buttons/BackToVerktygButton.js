import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function BackToVerktygButton() {
  return (
    <Button variant="outlined" sx={{ mt: 2 }} component={Link} to="/verktyg">
      tillbaka
    </Button>
  );
}

export default BackToVerktygButton;
