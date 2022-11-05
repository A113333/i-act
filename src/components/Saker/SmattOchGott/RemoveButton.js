import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import React from "react";

function RemoveButton({ onClick }) {
  return (
    <IconButton aria-label="delete" onClick={onClick}>
      <DeleteIcon color="primary" sx={{ fontSize: "1rem", opacity: "75%" }} />
    </IconButton>
  );
}

export default RemoveButton;
