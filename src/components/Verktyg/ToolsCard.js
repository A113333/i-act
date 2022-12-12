import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  Divider,
  Typography,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import PropTypes from "prop-types";

import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContentText from "@mui/material/DialogContentText";
import DialogContent from "@mui/material/DialogContent";

function ToolsCard({
  title,
  desc,
  readMoreText,
  readMoreTitle,
  startLink,
  resultsLink,
}) {
  const [open, setopen] = useState(false);

  const theme = useTheme();
  const readMoreClick = () => {
    setopen(true);
  };

  const handleClose = () => {
    setopen(false);
  };

  return (
    <>
      {" "}
      <Dialog
        onClose={handleClose}
        open={open}
        sx={{
          m: { xs: 0, sm: 1 },
          "& .MuiDialog-paper": { margin: 1 },
        }}
      >
        <DialogTitle>{readMoreTitle}</DialogTitle>

        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {readMoreText}
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>stäng</Button>
          <Button
            variant="text"
            component={Link}
            to={startLink}
            state={{ isTest: true }}
            sx={{ ml: 10, mr: 10 }}
          >
            visa övning
          </Button>
          <Button variant="text" component={Link} to={startLink} sx={{ mr: 3 }}>
            starta
          </Button>
        </DialogActions>
      </Dialog>
      <Card
        sx={{
          p: 2,
          m: { xs: "auto", sm: 2 },
          mt: { xs: 2, sm: 2 },
          pb: 0,
        }}
      >
        <Box>
          <CardActionArea sx={{ m: 0, p: 0 }} component={Link} to={startLink}>
            <Typography sx={{ fontWeight: 700 }}> {title}</Typography>
            <Typography display="inline" sx={{ fontSize: "0.8em" }}>
              {desc}
            </Typography>
          </CardActionArea>
          <Button
            sx={{ pl: 0, fontSize: "0.8em" }}
            onClick={() => readMoreClick()}
          >
            läs mer <NavigateNextIcon sx={{ fontSize: "1rem" }} />
          </Button>
        </Box>

        <Divider />
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Button
            variant="text"
            component={Link}
            to={resultsLink}
            sx={{
              width: "50%",
            }}
          >
            se sparade
          </Button>
          <Divider orientation="vertical" flexItem />

          <Button
            variant="text"
            component={Link}
            to={startLink}
            sx={{
              width: "50%",
            }}
          >
            starta
          </Button>
        </Box>
      </Card>
    </>
  );
}

export default ToolsCard;
