import React, { useEffect } from "react";
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

  let LocalUtmanaNatArray = localStorage.getItem("utmanaNat")
    ? JSON.parse(localStorage.getItem("utmanaNat"))
    : { utmanaNat: [] };

  useEffect(() => {
    console.log("LocalUtmanaNatArray");
    //   console.log(localStorage.getItem("utmanaNat"));
    LocalUtmanaNatArray.utmanaNat.push(formData);
    localStorage.setItem("utmanaNat", JSON.stringify(LocalUtmanaNatArray));
    console.log("i fire once");
  }, []);

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
          <ul>
            {" "}
            {formData.bevisForTanke.map((item, index) => (
              <li>
                <Typography display="inline">{item}</Typography>
              </li>
            ))}
          </ul>
        </Box>
        <Box sx={{ pb: customPb }}>
          <BlackBoxWithText text={"Dina bevis emot din tanke:"} />
          <ul>
            {" "}
            {formData.bevisMotTanke.map((item, index) => (
              <li>
                <Typography sx={{ pb: 1 }}> {item}</Typography>
              </li>
            ))}
          </ul>
        </Box>
        <Box sx={{ pb: customPb }}>
          {" "}
          {formData.tankeFallor ? (
            <BlackBoxWithText text={"Du använde följande tankefällor"} />
          ) : null}
          <ul>
            {formData.tankeFallor.map((item, index) => (
              <li>
                <Typography>{item.name}</Typography>
              </li>
            ))}
          </ul>
        </Box>
        <Box sx={{ pb: customPb }}>
          <BlackBoxWithText text="Din mer balanseradetanke:" />
          <Typography>{formData.balanseradTanke}</Typography>
        </Box>
        <Box sx={{ pb: customPb }}>
          <BlackBoxWithText text="Dina känslor i situationen:" />
          {formData.kanslorUnderIntensitet.map((data) => {
            return (
              <Typography>
                {data.lable} : {data.value}%
              </Typography>
            );
          })}
        </Box>
        <Box sx={{ pb: customPb }}>
          <BlackBoxWithText text="Dina känslor efter övningen:" />
          <ul>
            {formData.kanslorEfter.map((data, index) => {
              console.log(data);
              return (
                <li>
                  {" "}
                  <Typography>
                    {data.label}: {data.value}%
                  </Typography>
                </li>
              );
            })}
          </ul>
        </Box>
      </Box>
    </>
  );
}

export default UtamanaNatResults;
