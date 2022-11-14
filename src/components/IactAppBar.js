import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import Drawer from "./Drawer";
import useMediaQuery from "@mui/material/useMediaQuery";
import ConstructionIcon from "@mui/icons-material/Construction";
import useTheme from "@mui/material/styles/useTheme";
import { Button } from "@mui/material";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";

export default function ButtonAppBar() {
  const smallscreen = useMediaQuery("(min-width:600px)");
  const theme = useTheme();

  const [isOpen, setIsOpen] = useState(false);

  let closeDrawer = () => {
    setIsOpen(false);
  };
  return (
    <>
      {" "}
      <Drawer isOpen={isOpen} setClose={closeDrawer} />
      <Box
        sx={{
          flexGrow: 1,
        }}
      >
        <AppBar
          position="fixed"
          color=""
          elevation={0}
          sx={{
            backgroundColor: theme.palette.primary.main,
            height: "50px",
            top: 0,
            borderBottom: smallscreen
              ? `1px solid ${theme.palette.customGrey.dark}`
              : null,
            borderTop: smallscreen
              ? null
              : `1px solid ${theme.palette.customGrey.dark} `,
            /*            maxWidth: "1200px",
            width: smallscreen ? "90%" : "100%",
            left: "50%",
            transform: "translate(-50%, 0)", */
            pb: 3,
          }}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{
                mr: !smallscreen ? 0.5 : 2,
                color: theme.palette.customWhite.main,
              }}
              onClick={() => setIsOpen(true)}
            >
              <MenuIcon />
            </IconButton>

            {/*       <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="login"
              sx={{ mr: 2 }}
            >
              <PersonOutlineRoundedIcon />
            </IconButton> */}

            <Box sx={{ margin: "auto" }}>
              <Button
                component={Link}
                size="large"
                to="/"
                sx={{
                  color: theme.palette.customWhite.main,
                  fontSize: "1.5rem",
                  m: 0,
                  p: 0,
                }}
              >
                i-act
              </Button>
            </Box>

            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="Verktyg"
              component={Link}
              to="/verktyg"
              sx={{
                mr: !smallscreen ? 0.5 : 2,
                color: theme.palette.customWhite.main,
              }}
            >
              <ConstructionIcon />
            </IconButton>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="användarsida"
              component={Link}
              to="/anvandare"
              sx={{
                color: theme.palette.customWhite.main,
              }}
            >
              <PersonOutlineRoundedIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Toolbar />
      </Box>
    </>
  );
}
