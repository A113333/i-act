import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function ShowNrsPicked({ nrsPicked, nrsToPick }) {
  const howManyPickedStyle = {
    backgroundColor: "primary.main",
    color: "secondary.main",
    position: "fixed",
    top: "75px",
    p: 1,
    left: 0,
    border: "0.5px solid #f5f7f9",
    borderRadius: "0px 10px 10px 0px",
    opacity: "100%",
    zIndex: 1000,
  };

  return (
    <>
      <Box sx={howManyPickedStyle}>
        <Typography display="span">valda: {nrsPicked}</Typography>
        <Typography
          sx={{
            fontSize: "0.8rem",
            opacity: "50%",
            textAlign: "center",
          }}
        >
          välj minst {nrsToPick}
        </Typography>
      </Box>
    </>
  );
}

export default ShowNrsPicked;
