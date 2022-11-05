import { Typography, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <Typography> Uuuupppps.... något gick viss fel.... </Typography>
      <Button>
        {" "}
        <Link to="/">Gå tillbaka till startsidan </Link>
      </Button>
    </div>
  );
}

export default NotFound;
