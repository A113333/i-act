import { IconButton, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import Stepper from "./Stepper";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import useTheme from "@mui/material/styles/useTheme";

function ToolsAppBar({ step, setStep, numberOfSteps, closeLink }) {
  const theme = useTheme();
  const goBack = () => {
    console.log("going back");
  };

  const close = () => {
    console.log("close");
  };

  return (
    <>
      <Stepper numberOfSteps={numberOfSteps} step={step} isDone={false} />
      <Box
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          bgcolor: theme.palette.primary.dark,
          color: theme.palette.customWhite.main,
        }}
      >
        {/*  <Typography variant="h6" sx={{ textAlign: "center", color: "#247ba0" }}>
      {" "}
      Utmana dina tankar{" "}
    </Typography>
*/}

        <Stack alignItems="center" direction="row">
          <Typography
            sx={{
              pl: "44px",
              minWidth: "30px",
              flex: 1,
              textAlign: "center",
              fontSize: "0.7rem",
            }}
          >
            {step === 9
              ? "Bra jobbat!"
              : "Steg " + step + " av " + numberOfSteps}
          </Typography>

          <IconButton aria-label="tillbaka" onClick={() => close()}>
            <Link to={closeLink ? closeLink : "/verktyg"}>
              <CloseIcon
                sx={{ color: theme.palette.customWhite.main }}
                fontSize="small"
              />
            </Link>
          </IconButton>
        </Stack>
      </Box>
    </>
  );
}

export default ToolsAppBar;
