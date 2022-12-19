import { Box } from "@mui/material";
import React from "react";
import useTheme from "@mui/material/styles/useTheme";
function VerktygContainer(props) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.customGrey.main,
        px: { xs: 2, sm: 5 },
        // är sju för att kanpparna inte ska hamna över innehållet
        paddingBottom: 7,
        borderRadius: 3,
        position: "relative",
        textAlign: "left",
        maxWidth: "800px",
        m: "auto",
        mt: 4,
        minHeight: `calc(100vh - 65px)`,
      }}
    >
      {props.children}
    </Box>
  );
}

export default VerktygContainer;
