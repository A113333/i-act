import { Box } from "@mui/material";
import React from "react";

function VerktygContainer(props) {
  return (
    <Box
      sx={{
        backgroundColor: "#fefefe",
        px: { xs: 2, sm: 5 },
        pt: 12,
        pb: 5,
        borderRadius: 3,
        mt: 1,
        position: "relative",
        textAlign: "center",
        maxWidth: "1200px",
        m: "auto",
        minHeight: `calc(100vh - 65px)`,
      }}
    >
      {props.children}
    </Box>
  );
}

export default VerktygContainer;
