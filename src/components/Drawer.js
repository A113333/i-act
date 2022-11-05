import {
  SwipeableDrawer,
  IconButton,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import React from "react";

function Drawer({ isOpen, setClose }) {
  return (
    <>
      {" "}
      <SwipeableDrawer anchor="right" open={isOpen} onClose={setClose}>
        <Box role="presentation" sx={{ width: "200px", textAlign: "center" }}>
          <List>
            <ListItem>
              <Typography sx={{ fontWeight: 700 }}> Länkar </Typography>
            </ListItem>

            <ListItem>
              <Link to="/verktyg"> Verktyg </Link>
            </ListItem>

            <ListItem>
              <Link to="/verktyg/skattningar"> Skattningar </Link>
            </ListItem>

            <ListItem>
              <Link> Test1</Link>
            </ListItem>
          </List>
        </Box>
      </SwipeableDrawer>
    </>
  );
}

export default Drawer;
