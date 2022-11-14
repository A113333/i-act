import React, { useEffect } from "react";
import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import BlackBoxWithText from "../../Saker/SmattOchGott/BlackBoxWithText";

function SorkkResults(formData) {
  const customPb = 5;
  console.log(formData);
  return (
    <>
      <Typography variant="h6" sx={{ pb: 3 }}>
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
        <BlackBoxWithText text={"Situation:"} />
        <Typography
          sx={{
            pb: customPb,
          }}
        >
          "{formData.situation}"
        </Typography>
        <Typography
          sx={{
            opacity: "50%",
            mb: 1,
          }}
        >
          Tankar, känslor och kroppsupplevelser
        </Typography>
        <Typography
          sx={{
            pb: customPb,
          }}
        >
          {formData.organism}
        </Typography>
      </Box>
    </>
  );
}

export default SorkkResults;
