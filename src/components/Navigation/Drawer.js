import {
  SwipeableDrawer,
  IconButton,
  List,
  ListItem,
  Typography,
  Button,
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
              <Button component={Link} size="large" to="/verktyg">
                Hemuppgifter
              </Button>
            </ListItem>

            <ListItem>
              <Button component={Link} size="large" to="/verktyg/skattningar">
                Skattningar
              </Button>
            </ListItem>

            <ListItem>
              <Button
                component={Link}
                size="large"
                to="/verktyg/skattning/gad7/resultat"
              >
                Resultat GAD7
              </Button>
            </ListItem>

            <ListItem>
              <Button
                component={Link}
                size="large"
                to="/verktyg/skattning/madras-s/resultat"
              >
                Resultat MADRAS
              </Button>
            </ListItem>
          </List>
        </Box>
      </SwipeableDrawer>
    </>
  );
}

export default Drawer;
