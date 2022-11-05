import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import { ReactComponent as SmallIcon } from "../img/icon.svg";
import { Link } from "react-router-dom";
import Drawer from "./Drawer";
import useMediaQuery from "@mui/material/useMediaQuery";

let SmallIconImg = SmallIcon;

export default function ButtonAppBar() {
  const smallscreen = useMediaQuery("(min-width:500px)");

  const [isOpen, setIsOpen] = useState(false);

  let closeDrawer = () => {
    setIsOpen(false);
  };
  return (
    <>
      {" "}
      <Drawer isOpen={isOpen} setClose={closeDrawer} />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="fixed"
          color=""
          elevation={0}
          sx={{ height: "60px", top: !smallscreen ? `calc(100vh - 60px)` : 0 }}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="login"
              sx={{ mr: 2 }}
            >
              <PersonOutlineRoundedIcon />
            </IconButton>

            <Box sx={{ margin: "auto", mt: "15px" }}>
              <Link to="/">
                <SmallIconImg height={"38px"} />
              </Link>
            </Box>

            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ ml: 2 }}
              onClick={() => setIsOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
