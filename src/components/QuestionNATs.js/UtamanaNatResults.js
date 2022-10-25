import React from "react";
import { Typography } from "@mui/material";
import { StayPrimaryLandscape } from "@mui/icons-material";
import { Box } from "@mui/system";

function UtamanaNatResults({ setFormData, setIsDone, formData }) {
  const arr = {
    tanke: "",
    troPaTanke: "",
    kanslorUnder: [],
    kanslorUnderIntensitet: [],
    bevisForTanke: "",
    bevisMotTanke: "",
    tankeFallor: [],
    balanseradTanke: "",
    kanslorEfter: [],
    troPaTankeEfter: "",
  };

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
      <Box
        sx={{
          backgroundColor: "primary.main",
          color: "#F8F9FA",
          p: 1,
          borderRadius: 1,
          width: { xs: "100%", sm: "75%" },
          m: "auto",
        }}
      >
        {" "}
        <Typography variant="body2">Din tanke ursprungliga tanke:</Typography>
      </Box>

      <Typography sx={{ width: { xs: "100%", sm: "75%" }, m: "auto" }}>
        {" "}
        Jag tänkte: {formData.tanke}
      </Typography>
      <Typography>
        {" "}
        Innan övningen trodde du på din tanken till {formData.troPaTanke} %
      </Typography>
      <Typography>
        {" "}
        Efter övningen trodde du på din tanken till {formData.troPaTankeEfter} %
      </Typography>

      <Box
        sx={{
          backgroundColor: "primary.main",
          color: "#F8F9FA",
          p: 1,
          borderRadius: 1,
          width: { xs: "100%", sm: "75%" },
          m: "auto",
        }}
      >
        {" "}
        <Typography variant="body2">Din mer balanseradetanke:</Typography>
      </Box>

      <Typography>{formData.balanseradTanke}</Typography>

      <Box
        sx={{
          backgroundColor: "primary.main",
          color: "#F8F9FA",
          p: 1,
          borderRadius: 1,
          width: { xs: "100%", sm: "75%" },
          m: "auto",
        }}
      >
        {" "}
        <Typography variant="body2">
          Dina känslor innan och efter övningen:
        </Typography>
      </Box>
      {kanslorUnder.map((data) => {
        return (
          <Typography>
            {data.lable} intensitet under: {data.kanslorUnderIntensitet}
          </Typography>
        );
      })}
    </>
  );
}

export default UtamanaNatResults;
