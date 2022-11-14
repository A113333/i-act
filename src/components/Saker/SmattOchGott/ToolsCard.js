import React from "react";
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
import AddIcon from "@mui/icons-material/Add";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function ToolsCard({ title, desc, readMoreLink, startLink }) {
  const theme = useTheme();
  const readMoreClick = () => {
    console.log(readMoreLink);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Card
      sx={{
        p: 2,
        m: { xs: "auto", sm: 2 },
        mt: { xs: 2, sm: 2 },
        pb: 0,
      }}
    >
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ float: "left", p: 0, m: 0 }}
      >
        <MoreVertIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>

      <CardActionArea component={Link} to={startLink}>
        <Box sx={{ width: "70%" }}>
          <Typography sx={{ fontWeight: 700 }}> {title}</Typography>
          <Typography> {desc} </Typography>
        </Box>
        <AddIcon sx={{ float: "right", fontSize: "2rem" }} />
      </CardActionArea>

      <Button
        sx={{
          fontWeight: 500,
          textAlign: "left",
          display: "inline-block",
          pl: 0,
        }}
        onClick={() => readMoreClick(readMoreLink)}
      >
        Läs mer
      </Button>

      <Divider />
      <Button variant="text" component={Link} to={startLink} fullWidth>
        Starta
      </Button>
    </Card>
  );
}

export default ToolsCard;
