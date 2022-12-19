import React from "react";
import { Divider, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import EditRoundedIcon from "@mui/icons-material/EditRounded";

function UpdatedShowOvningResults({ formData, questionArr }) {
  const customPb = 5;
  console.log(formData, "formdata");
  console.log(questionArr, "questionArrr");

  const changeData = () => {
    console.log("click");
  };
  return (
    <>
      <Typography variant="h6" sx={{ pb: 3 }}>
        Samanställning av övningen
      </Typography>{" "}
      <Divider></Divider>
      <Box
        sx={{
          textAlign: "left",
          m: "auto",
          pt: customPb,
          width: { xs: "100%", sm: "55%" },
        }}
      >
        {questionArr.map((item, index) => (
          <>
            <Typography
              display="inline"
              key={index}
              sx={{
                opacity: "50%",
                mb: 1,
              }}
            >
              {item.question}
            </Typography>
            {/*    <IconButton>
              <EditRoundedIcon onClick={changeData} />
            </IconButton> */}

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
