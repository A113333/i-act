import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { Slider, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import MySlider from "../inputs/MySlider";

function Step3({ setFormData, setIsDone, formData }) {
  const [kansloIntensitet, setkansloIntensitet] = useState([]);

  const addKansloIntensite = (data) => {
    const updatedkansloIntensitet = [...kansloIntensitet];
    updatedkansloIntensitet[data.index] = {
      id: data.index,
      value: data.value,
      lable: data.lable,
    };
    setkansloIntensitet(updatedkansloIntensitet);
  };

  const userFeelingsIntensiti = [];

  useEffect(() => {
    kansloIntensitet.forEach((item, index) => {
      if (item === undefined) {
        return null;
        //console.log("undefined");
      }
      if (item) {
        console.log("item");
        console.log(item);
        userFeelingsIntensiti.push(item);
      }
    });
    //  console.log("userFeelingsIntensiti");
    // console.log(userFeelingsIntensiti);
    setFormData({
      ...formData,
      kanslorUnderIntensitet: userFeelingsIntensiti,
    });
    //  console.log("fromData");
    // console.log(formData);
  }, [kansloIntensitet]);

  useEffect(() => {
    if (
      formData.kanslorUnder.length === formData.kanslorUnderIntensitet.length
    ) {
      setIsDone(true);
    }
  }, [formData]);
  return (
    <>
      {" "}
      <Box sx={{ mb: 10 }}>
        <Typography variant="h6" sx={{ mb: "25px" }}>
          {" "}
          Hur intensiva var dina känslor?{" "}
        </Typography>

        {formData.kansloIntensitet !== 0
          ? formData.kanslorUnder.map((data, index) => {
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
                    <Typography sx={{ fontSize: "0.7rem" }}>
                      {" "}
                      Knappt märkbar{" "}
                    </Typography>
                    <Slider
                      defaultValue={50}
                      valueLabelDisplay="auto"
                      step={1}
                      min={0}
                      max={100}
                      key={data.id}
                      sx={{ width: { xs: "100%", sm: "50%" }, margin: "auto" }}
                      onChange={(e) =>
                        addKansloIntensite({
                          value: e.target.value,
                          index: data.id,
                          lable: data.lable,
                        })
                      }
                    />
                    <Typography sx={{ fontSize: "0.7rem" }}>
                      {" "}
                      Väldigt stark{" "}
                    </Typography>
                  </Stack>
                </Box>
              );
            })
          : formData.kanslorUnderIntensitet.map((data, index) => {
              return (
                <Box key={`custom-box-${data.id}`} id={`custom-box-${data.id}`}>
                  {" "}
                  <Typography> {data.lable} </Typography>{" "}
                  <Typography sx={{ opacity: "50%" }}>
                    {" "}
                    {!kansloIntensitet[data.id]
                      ? data.value + "-/100"
                      : kansloIntensitet[data.id].value + "/100"}
                  </Typography>{" "}
                  <Stack
                    spacing={2}
                    direction="row"
                    sx={{ mb: 1 }}
                    alignItems="center"
                    justifyContent={"center"}
                  >
                    <Typography sx={{ fontSize: "0.7rem" }}>
                      {" "}
                      Knappt märkbar{" "}
                    </Typography>
                    <Slider
                      defaultValue={50}
                      valueLabelDisplay="auto"
                      step={1}
                      min={0}
                      max={100}
                      key={data.id}
                      sx={{ width: { xs: "100%", sm: "50%" }, margin: "auto" }}
                      onChange={(e) =>
                        addKansloIntensite({
                          value: e.target.value,
                          index: data.id,
                          lable: data.lable,
                        })
                      }
                    />
                    <Typography sx={{ fontSize: "0.7rem" }}>
                      {" "}
                      Väldigt stark{" "}
                    </Typography>
                  </Stack>
                </Box>
              );
            })}
      </Box>
    </>
  );
}

export default Step3;
