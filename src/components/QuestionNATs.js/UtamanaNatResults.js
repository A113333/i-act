import React from "react";
import { Divider, Typography } from "@mui/material";
import { StayPrimaryLandscape } from "@mui/icons-material";
import { Box } from "@mui/system";
import BlackBoxWithText from "../Saker/BlackBoxWithText";
import { json } from "react-router-dom";

function UtamanaNatResults({ setFormData, setIsDone, formData }) {
  const arr = {
    tankeFallor: [],
  };

  const customPb = 5;

  console.log(formData);

  const kanslorUnder = [];
  const feelingsBeforAndAfter = formData.kanslorUnder.map((data) => {
    formData.kanslorUnderIntensitet.forEach((element) => {
      if (data.id === element.id) {
        kanslorUnder.push({
          kanslorUnderIntensitet: element.value,
          lable: data.lable,
        });
      }
    });
  });

  return (
    <>
      <Typography variant="h6" sx={{ pb: 3 }}>
        {" "}
        Resultat{" "}
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
        <BlackBoxWithText text={"Din ursprungliga tanke:"} />
        <Typography
          sx={{
            pb: customPb,
          }}
        >
          "{formData.tanke}"
        </Typography>
        <Typography
          sx={{
            opacity: "50%",
          }}
        >
          Innan övningen trodde du på din tanken till:{" "}
        </Typography>{" "}
        <Typography
          sx={{
            pb: customPb,
          }}
        >
          {" "}
          {formData.troPaTanke} %
        </Typography>
        <Typography
          sx={{
            opacity: "50%",
          }}
        >
          Efter övningen trodde du på din tanken till
        </Typography>{" "}
        <Typography
          sx={{
            pb: customPb,
          }}
        >
          {formData.troPaTankeEfter} %
        </Typography>
        <Box sx={{ pb: customPb }}>
          <BlackBoxWithText text={"Dina bevis för din tanke:"} />
          {formData.bevisForTanke.map((item, index) => (
            <>
              <Box sx={{ width: "100%", pb: 1 }}>
                <Typography
                  sx={{
                    opacity: "50%",
                  }}
                  display="inline"
                >
                  {" "}
                  {index + 1}. {"  "}
                </Typography>

                <Typography display="inline">{item}</Typography>
              </Box>
            </>
          ))}
        </Box>
        <Box sx={{ pb: customPb }}>
          <BlackBoxWithText text={"Dina bevis emot din tanke:"} />
          {formData.bevisMotTanke.map((item, index) => (
            <Typography sx={{ pb: 1 }}> {item}</Typography>
          ))}
        </Box>
        <Box sx={{ pb: customPb }}>
          {formData.tankeFallor ? (
            <BlackBoxWithText text={"Du använde följande tankefällor"} />
          ) : null}
          {formData.tankeFallor.map((item, index) => (
            <Typography>{item.name}</Typography>
          ))}
        </Box>
        <Box sx={{ pb: customPb }}>
          <BlackBoxWithText text="Din mer balanseradetanke:" />
          <Typography>{formData.balanseradTanke}</Typography>
        </Box>
        <Box sx={{ pb: customPb, width: "49%" }}>
          <BlackBoxWithText text="Dina känslor i situationen:" />
          {formData.kanslorUnderIntensitet.map((data) => {
            return (
              <Typography>
                {data.lable} : {data.value}%
              </Typography>
            );
          })}
        </Box>
        <Box sx={{ pb: customPb, width: "49%" }}>
          <BlackBoxWithText text="Dina känslor efter övningen:" />
          {formData.kanslorEfter.map((data, index) => {
            console.log(data);
            return (
              <Typography>
                {data.label}: {data.value} %
              </Typography>
            );
          })}
        </Box>
      </Box>
    </>
  );
}

export default UtamanaNatResults;
