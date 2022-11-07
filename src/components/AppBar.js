import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { ReactComponent as SmallIcon } from "../img/icon.svg";
import { Link } from "react-router-dom";
import Drawer from "./Drawer";
import useMediaQuery from "@mui/material/useMediaQuery";
import ConstructionIcon from "@mui/icons-material/Construction";
import useTheme from "@mui/material/styles/useTheme";
let SmallIconImg = SmallIcon;

export default function ButtonAppBar() {
  const smallscreen = useMediaQuery("(min-width:500px)");
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
            height: "60px",
            top: !smallscreen ? `calc(100vh - 60px)` : 0,
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
                color: theme.palette.customBlack.main,
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

            <Box sx={{ margin: "auto", mt: "15px" }}>
              <Link to="/">
                <SmallIconImg height={"38px"} />
              </Link>
            </Box>

            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="login"
              component={Link}
              to="/verktyg"
              sx={{
                mr: !smallscreen ? 0.5 : 2,
                color: theme.palette.customBlack.main,
              }}
            >
              <ConstructionIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
