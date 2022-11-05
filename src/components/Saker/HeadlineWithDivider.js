import { Divider, Typography } from "@mui/material";
import React from "react";

function HeadlineWithDivider(props) {
  return (
    <>
      {" "}
      <Typography variant="h6"> {props.children} </Typography>
      <Divider sx={{ mb: 3 }}></Divider>
    </>
  );
}

export default HeadlineWithDivider;
