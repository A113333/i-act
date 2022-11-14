import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import useTheme from "@mui/material/styles/useTheme";

function Stepper({ numberOfSteps, step, isItDone }) {
  const theme = useTheme();
  return (
    <div>
      <LinearProgress
        variant="determinate"
        value={step >= numberOfSteps ? 100 : (100 / numberOfSteps) * step}
        sx={{
          position: "fixed",
          top: "44px",
          left: "0px",
          width: "100%",
          padding: "0px",
          zIndex: 100,
          height: 7,
          "& .MuiLinearProgress-colorPrimary": {
            backgroundColor: theme.palette.customGrey.dark,
          },
          "& .MuiLinearProgress-barColorPrimary": {
            backgroundColor: "#525455",
          },

          // borderRadius: 5,
        }}
      />
    </div>
  );
}

export default Stepper;
