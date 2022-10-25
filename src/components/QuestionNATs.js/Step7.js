import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { Slider, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";

function Step7({ setFormData, setIsDone, formData }) {
  const [kansloIntensitet, setkansloIntensitet] = useState([]);

  console.log(formData.kanslorUnder);

  const addKansloIntensite = (data) => {
    const updatedkansloIntensitet = [...kansloIntensitet];
    updatedkansloIntensitet[data.index] = {
      id: data.index,
      value: data.value,
      label: data.lable,
    };
    setkansloIntensitet(updatedkansloIntensitet);
  };

  // console.log(kansloIntensitet);

  const userFeelingsIntensiti = [];

  useEffect(() => {
    console.log("kanslorUnder");
    console.log(formData.kanslorUnder.length);
    console.log("kanslorUnderIntensitet.length");
    console.log(formData.kanslorUnderIntensitet.length);

    kansloIntensitet.forEach((item, index) => {
      if (item === undefined) {
        //console.log("undefined");
      }
      if (item) {
        console.log(item);
        userFeelingsIntensiti.push(item);
      }
    });
    //  console.log("userFeelingsIntensiti");
    // console.log(userFeelingsIntensiti);
    setFormData({
      ...formData,
      kanslorEfter: userFeelingsIntensiti,
    });
    //  console.log("fromData");
    // console.log(formData);
  }, [kansloIntensitet]);

  useEffect(() => {
    if (formData.kanslorUnder.length === formData.kanslorEfter.length) {
      console.log("setisdontrue");
      setIsDone(true);
    }
  }, [formData]);

  return (
    <>
      <Typography variant="h6">Hur intensvia är dina känslor nu?</Typography>

      {formData.kanslorUnder.map((data) => {
        return (
          <Box key={`custom-box-${data.id}`} id={`custom-box-${data.id}`}>
            {" "}
            <Typography> {data.lable} </Typography>{" "}
            <Typography sx={{ opacity: "50%" }}>
              {" "}
              {!kansloIntensitet[data.id]
                ? "-/100"
                : kansloIntensitet[data.id].value + "/100"}
            </Typography>{" "}
            <Stack
              spacing={2}
              direction="row"
              sx={{ mb: 1 }}
              alignItems="center"
              justifyContent={"center"}
            >
              <Typography> 0 </Typography>
              <Slider
                defaultValue={50}
                valueLabelDisplay="auto"
                step={1}
                min={0}
                max={100}
                sx={{ width: { xs: "100%", sm: "50%" }, margin: "auto" }}
                onChange={(e) =>
                  addKansloIntensite({
                    value: e.target.value,
                    index: data.id,
                    lable: data.lable,
                  })
                }
              />
              <Typography> 100 </Typography>
            </Stack>
          </Box>
        );
      })}
    </>
  );
}

export default Step7;
