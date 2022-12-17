import React from "react";
import { Divider, ListItemAvatar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import IactAppBar from "../Navigation/IactAppBar";

function UpdatedShowOvningResults({ formData, questionArr }) {
  const customPb = 5;
  console.log(formData, "formdata");
  console.log(questionArr, "questionArrr");

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
        {questionArr.map((item, index) => (
          <>
            <Typography
              key={index}
              sx={{
                opacity: "50%",
                mb: 1,
              }}
            >
              {item.question}
            </Typography>
            {Array.isArray(item.anwser) ? (
              item.anwser.map((item, index) => (
                <Typography key={index}>
                  <li> {item}</li>
                </Typography>
              ))
            ) : (
              <Typography
                key={index + 10}
                sx={{
                  pb: customPb,
                }}
              >
                {item.anwser}
              </Typography>
            )}
          </>
        ))}
      </Box>
    </>
  );
}

export default UpdatedShowOvningResults;
