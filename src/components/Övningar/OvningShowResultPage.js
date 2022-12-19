import React from "react";
import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";

function TextOvningResultat({ formData, questionArr, title }) {
  const customPb = 5;
  console.log(formData, "formdata");
  console.log(questionArr, "questionArr");

  return (
    <>
      <Typography variant="h6" sx={{ pb: 3 }}>
        {title ? title : "Samanställning av övningen"}
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
                mb: 3,
              }}
            >
              {item.question}
            </Typography>

            {Array.isArray(item.anwser) ? (
              item.anwser.map((item, index) => (
                <Typography
                  key={index}
                  sx={{
                    pb: customPb,
                  }}
                >
                  <li>
                    {item.name} {item.desc ? ": " + item.desc : ""}
                  </li>
                </Typography>
              ))
            ) : (
              <Typography
                key={index + 10}
                sx={{
                  pb: customPb,
                }}
              >
                {formData[item.name]}
              </Typography>
            )}
          </>
        ))}
      </Box>
    </>
  );
}

export default TextOvningResultat;
