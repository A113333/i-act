import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function VerktygKnapp({ page, setPage, lastPage }) {
  return (
    <>
      {" "}
      {page === lastPage ? (
        <Button
          variant="contained"
          fullWidth
          component={Link}
          to="/verktyg"
          sx={{ position: "absolute", right: "0", bottom: "0" }}
        >
          Avsluta
        </Button>
      ) : (
        <Button
          variant="contained"
          fullWidth
          onClick={() => setPage(page + 1)}
          sx={{ position: "absolute", right: "0", bottom: "0", mt: 5 }}
        >
          {" "}
          {page === lastPage - 1 ? "Visa resultat" : "Nästa"}
        </Button>
      )}
    </>
  );
}

export default VerktygKnapp;
