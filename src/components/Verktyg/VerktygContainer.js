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
        paddingBottom: 10,
        position: "relative",
        textAlign: "left",
        maxWidth: "800px",
        m: "auto",
        // är 10 för att headline ska synas väl under appbar
        mt: 5,
        minHeight: `calc(100vh - 150px)`,
      }}
    >
      {props.children}
    </Box>
  );
}

export default VerktygContainer;
