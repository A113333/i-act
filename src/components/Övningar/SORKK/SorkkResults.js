import React from "react";
import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import IactAppBar from "../../Navigation/IactAppBar";

function SorkkResults({ formData, questionArr }) {
  const customPb = 5;

  return (
    <>
      <IactAppBar />
      <Typography variant="h6" sx={{ pb: 3, pt: 3 }}>
        Samanställning av övningen
      </Typography>

      <Divider></Divider>
      <Box
        sx={{
          textAlign: "left",
          width: "70%",
          m: "auto",
          pt: customPb,
          width: { xs: "100%", sm: "55%" },
        }}
      >
        {questionArr.map((item, index) => (
          <>
            <Typography
              sx={{
                opacity: "50%",
                mb: 1,
              }}
            >
              {item.question}
            </Typography>
            <Typography
              sx={{
                pb: customPb,
              }}
            >
              {formData[item.name]}
            </Typography>
          </>
        ))}
      </Box>
    </>
  );
}

export default SorkkResults;
