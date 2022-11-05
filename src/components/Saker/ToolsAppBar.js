import { IconButton, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import Stepper from "./Stepper";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

function ToolsAppBar({ step, setStep, numberOfSteps }) {
  let goBack = () => {
    console.log("going back");
  };

  let close = () => {
    console.log("close");
  };

  return (
    <>
      <Stepper numberOfSteps={numberOfSteps} step={step} isDone={false} />
      <Box
        sx={{
          pt: 1,
          position: "sticky",
          top: 0,
          zIndex: 100,
          bgcolor: "white",
        }}
      >
        {/*  <Typography variant="h6" sx={{ textAlign: "center", color: "#247ba0" }}>
      {" "}
      Utmana dina tankar{" "}
    </Typography>
*/}

        <Stack alignItems="center" direction="row">
          {step === numberOfSteps || step === 0 ? (
            <IconButton aria-label="tillbaka" sx={{ opacity: "25%" }} disabled>
              <ArrowBackIcon color="primary" fontSize="small" />
            </IconButton>
          ) : (
            <IconButton aria-label="tillbaka" onClick={() => goBack()}>
              <ArrowBackIcon color="primary" fontSize="small" />
            </IconButton>
          )}

          <Typography
            sx={{
              minWidth: "30px",
              flex: 1,
              textAlign: "center",
              fontSize: "0.7rem",
            }}
          >
            {step === 9 ? "Bra jobbat!" : step + "/ " + numberOfSteps}
          </Typography>

          <IconButton aria-label="tillbaka" onClick={() => close()}>
            <Link to="/verktyg">
              <CloseIcon color="primary" fontSize="small" />
            </Link>
          </IconButton>
        </Stack>
      </Box>
    </>
  );
}

export default ToolsAppBar;
