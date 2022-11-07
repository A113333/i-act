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
  const onOpen = () => {
    setClose(true);
  };
  return (
    <>
      {" "}
      <SwipeableDrawer
        anchor="left"
        open={isOpen}
        onClose={setClose}
        onOpen={onOpen}
      >
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
              <Link to="/verktyg/skattning/gad7/resultat"> Resultat GAD7</Link>
            </ListItem>
          </List>
        </Box>
      </SwipeableDrawer>
    </>
  );
}

export default Drawer;
