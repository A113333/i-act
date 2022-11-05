import { Box } from "@mui/system";
import React from "react";

function ToolsContainer(props) {
  return (
    <Box
      sx={{
        backgroundColor: "#fefefe",
        px: { xs: 2, sm: 5 },
        pt: 7,
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

export default ToolsContainer;
