import { Button, Typography } from "@mui/material";
import React, { useState } from "react";
import Feelings from "../Verktyg/Feelings";

function StartFeelingsButton() {
  const [showFeelingsFinder, setshowFeelingsFinder] = useState(false);
  const onClick = () => {
    setshowFeelingsFinder(true);
  };
  return (
    <>
      {" "}
      <Button variant="contained" onClick={() => onClick()}>
        Använd känslofinnaren
      </Button>
      <Typography> lalal </Typography>
      {showFeelingsFinder ? <Feelings /> : null}
    </>
  );
}

export default StartFeelingsButton;
