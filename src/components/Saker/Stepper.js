import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";

function Stepper({ numberOfSteps, step, isItDone }) {
  return (
    <div>
      <LinearProgress
        variant="determinate"
        value={step >= numberOfSteps ? 100 : (100 / numberOfSteps) * step}
        color="primary"
        sx={{
          position: "fixed",
          top: "45px",
          left: "0px",
          width: "100%",
          padding: "0px",
          zIndex: 100,
          height: 5,

          // borderRadius: 5,
        }}
      />
    </div>
  );
}

export default Stepper;
