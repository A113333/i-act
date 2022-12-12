import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import Drawer from "../Navigation/Drawer";
import useMediaQuery from "@mui/material/useMediaQuery";
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
        <AppBar position="sticky" elevation={0}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
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

            <Box sx={{ m: "auto", pl: "100px" }}>
              <Button
                component={Link}
                size="large"
                to="/"
                sx={{
                  fontSize: "1.5rem",
                }}
                color="secondary"
              >
                i-act
              </Button>
            </Box>

            <Button
              size="large"
              edge="start"
              color="inherit"
              aria-label="användarsida"
              component={Link}
              to="/kontaktaoss"
              sx={{ fontWeight: "400" }}
            >
              kontakt
            </Button>

            <Button
              size="large"
              edge="start"
              color="inherit"
              aria-label="användarsida"
              component={Link}
              to="/anvandare"
              sx={{ fontWeight: "400" }}
            >
              logga in
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
