import { Button, IconButton } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

function VerktygKnapp({ page, setPage, lastPage }) {
  const navigate = useNavigate();
  const onClick = () => {
    page === 0 ? navigate("/verktyg") : setPage(page - 1);
  };
  return (
    <>
      <IconButton
        sx={{
          position: "absolute",
          left: 25,
          bottom: 10,
          mt: 5,
          color: "primary.main",
        }}
        onClick={() => onClick()}
      >
        <ArrowBackIosIcon />
      </IconButton>

      {page === lastPage ? (
        <Button
          variant="contained"
          component={Link}
          to="/verktyg"
          sx={{ position: "absolute", right: 25, bottom: 10, mt: 5 }}
        >
          Avsluta
        </Button>
      ) : (
        <Button
          variant="contained"
          onClick={() => setPage(page + 1)}
          sx={{ position: "absolute", right: 25, bottom: 10, mt: 5 }}
        >
          {" "}
          {page === lastPage - 1 ? "Visa resultat" : "Nästa"}
        </Button>
      )}
    </>
  );
}

export default VerktygKnapp;
