import React from "react";
import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";

/* Vill ha ett svarsobject:
{
  title: Rubriken som ska visas
  questionArr: [{question: "Frågan som besvarades", anwser: "Svaret som gavs" }]
}
*/
function UpdatedShowOvningResults({ title, questionArr }) {
  console.log(questionArr, "questionArrr");

  return (
    <>
      <Typography variant="h6" sx={{ pb: 2 }}>
        {title ? title : "Samanställning av övningen"}
      </Typography>
      <Divider></Divider>
      <Box
        sx={{
          textAlign: "left",
          m: "auto",
          pt: 5,
          width: { xs: "100%", sm: "100%" },
        }}
      >
        {questionArr.map((item, index) => (
          <>
            <Typography
              display="inline"
              key={index}
              sx={{
                opacity: "50%",
              }}
            >
              {item.question}
            </Typography>
            {/*    <IconButton>
              <EditRoundedIcon onClick={changeData} />
            </IconButton> */}
            <Box sx={{ my: 1 }}>
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
                    pb: 2,
                  }}
                >
                  {item.anwser}
                </Typography>
              )}
            </Box>
          </>
        ))}
      </Box>
    </>
  );
}

export default UpdatedShowOvningResults;
