import { Box } from "@mui/system";
import React from "react";
import { TextField } from "@mui/material";

function ContactUs() {
  return (
    <Box
      sx={{
        backgroundColor: "customGrey.main",
        height: "200px",
        color: "secondary",
      }}
    >
      <div>
        {" "}
        <TextField
          InputLabelProps={{
            style: { color: "#fff" },
          }}
          id="standard-basic"
          label="Namn"
          placeholder=""
          variant="standard"
          color="customWhite"
          sx={{
            input: {
              color: "white", // if you also want to change the color of the input, this is the prop you'd use
            },

            "& .MuiInput-underline:before": {
              borderBottomColor: "customWhite.main",
            },
            "& .MuiInput-underline:after": {
              borderBottomColor: "customWhite.main",
            },
            "& .MuiInput:hover": {
              borderBottomColor: "customWhite.main",
            },
          }}
        />
      </div>
    </Box>
  );
}

export default ContactUs;
