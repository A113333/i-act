import React, { useEffect } from "react";
import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";

function UtamanaNatResults({ setFormData, setIsDone, formData }) {
  const arr = {
    tankeFallor: [],
  };

  function Headline({ text }) {
    return (
      <Box
        sx={{
          opacity: "60%",
        }}
      >
        <Typography sx={{ mb: 1 }} variant="body1">
          {text}
        </Typography>
      </Box>
    );
  }

  const customPb = 3;

  console.log(formData);

  let LocalUtmanaNatArray = localStorage.getItem("utmanaNat")
    ? JSON.parse(localStorage.getItem("utmanaNat"))
    : [];

  useEffect(() => {
    LocalUtmanaNatArray.push(formData);
    localStorage.setItem("utmanaNat", JSON.stringify(LocalUtmanaNatArray));
  }, []);

  const kanslorUnder = [];

  console.log("typeof ");
  console.log(formData.tankeFallor.length);

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
        <Headline text={"Din ursprungliga tanke:"} />
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
            mb: 1,
          }}
        >
          Innan övningen trodde du på din tanken till:
        </Typography>
        <Typography
          sx={{
            pb: customPb,
          }}
        >
          {formData.troPaTanke} %
        </Typography>
        <Typography
          sx={{
            opacity: "50%",
            mb: 1,
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
          <Headline text={"Dina bevis för din tanke:"} />{" "}
          {formData.bevisForTanke?.map((item, index) => (
            <li>
              <Typography display="inline">{item}</Typography>
            </li>
          ))}
        </Box>
        <Box sx={{ pb: customPb }}>
          <Headline text={"Dina bevis emot din tanke:"} />

          {formData.bevisMotTanke?.map((item, index) => (
            <li>
              <Typography display="inline" sx={{ pb: 1 }}>
                {" "}
                {item}
              </Typography>
            </li>
          ))}
        </Box>
        {formData.tankeFallor.length > 0 ? (
          <Box sx={{ pb: customPb }}>
            <Headline text={"Du använde följande tankefällor"} />

            {formData.tankeFallor?.map((item, index) => (
              <li>
                <Typography display="inline">{item.name}</Typography>
              </li>
            ))}
          </Box>
        ) : (
          <p>lala</p>
        )}
        <Box sx={{ pb: customPb }}>
          <Headline text="Din mer balanseradetanke:" />
          <Typography>{formData.balanseradTanke}</Typography>
        </Box>
        <Box sx={{ pb: customPb }}>
          <Headline text="Dina känslor i situationen:" />

          {formData.kanslorUnder?.map((data) => {
            return (
              <li>
                <Typography display="inline">
                  {data.name} : {data.value}%
                </Typography>
              </li>
            );
          })}
        </Box>
        <Box sx={{ pb: customPb }}>
          <Headline text="Dina känslor efter övningen:" />

          {formData.kanslorEfter?.map((data, index) => {
            console.log(data);
            return (
              <li>
                {" "}
                <Typography display="inline">
                  {data.name}: {data.value}%
                </Typography>
              </li>
            );
          })}
        </Box>
      </Box>
    </>
  );
}

export default UtamanaNatResults;
