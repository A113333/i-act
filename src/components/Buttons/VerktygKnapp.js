import { Button, IconButton } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

function VerktygKnapp({
  page,
  setPage,
  lastPage,
  isDone,
  setIsDone,
  onClickForward,
  onClickBack,
  isResultsPage,
}) {
  const navigate = useNavigate();
  const onClickBackDefault = () => {
    page === 0 ? navigate("/verktyg") : setPage(page - 1);
    window.scrollTo(0, 0);
  };

  const onClickForwardDefault = () => {
    setPage(page + 1);
    setIsDone(false);
    window.scrollTo(0, 0);
    console.log("default");
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
        onClick={onClickBack ? onClickBack : onClickBackDefault}
      >
        <ArrowBackIosIcon />
      </IconButton>

      {isResultsPage ? (
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
          onClick={onClickForward ? onClickForward : onClickForwardDefault}
          sx={{ position: "absolute", right: 25, bottom: 10, mt: 5 }}
          disabled={!isDone}
        >
          {page === lastPage - 1 ? "Visa resultat" : "Nästa"}
        </Button>
      )}
    </>
  );
}

export default VerktygKnapp;
