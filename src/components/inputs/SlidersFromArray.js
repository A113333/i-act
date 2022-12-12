import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Slider, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";

function SlidersFromArray({ formData, setFormData, sliderArr }) {
  const feelingsArr = [
    { lable: "Chock", id: 24, type: "rädsla" },
    { lable: "Hotad", id: 25, type: "rädsla" },
    { lable: "Skräckslagen", id: 26, type: "rädsla" },
    { lable: "Undergiven", id: 27, type: "rädsla" },
  ];

  console.log(sliderArr, "sliderArr");

  const [kansloIntensitet, setkansloIntensitet] = useState([...sliderArr]);

  const getIndex = (id) => {
    const i = kansloIntensitet.findIndex((e) => e.id === id);
    return i;
  };

  const addKansloIntensite = ({ id, value, lable }) => {
    const updatedkansloIntensitet = [...kansloIntensitet];
    console.log(lable);
    const i = getIndex(id);
    console.log(i);

    if (i === -1) {
      console.log("körs");
      updatedkansloIntensitet.push({
        id: id,
        value: value,
        name: lable,
      });
    } else {
      updatedkansloIntensitet[i].value = value;
    }

    setkansloIntensitet(updatedkansloIntensitet);
    console.log(updatedkansloIntensitet);
    // console.log(kansloIntensitet);
  };

  return (
    <Box sx={{ mb: 10, textAlign: "center" }}>
      <Typography variant="h6" sx={{ mb: 2, mt: 2 }}>
        Hur intensiva var dina känslor?
      </Typography>

      {feelingsArr.length > 0 ? (
        feelingsArr.map((item, index) => (
          <Box key={`custom-box-${item.id}`} id={`custom-box-${item.id}`}>
            {" "}
            <Typography> {item.lable} </Typography>{" "}
            <Typography sx={{ opacity: "50%" }}>
              {kansloIntensitet[index].value
                ? kansloIntensitet[index].value + "/100"
                : "-/100"}
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
                key={item.id}
                sx={{ width: { xs: "100%", sm: "50%" }, margin: "auto" }}
                onChange={(e) =>
                  addKansloIntensite({
                    value: e.target.value,
                    id: item.id,
                    lable: item.lable,
                  })
                }
              />
              <Typography sx={{ fontSize: "0.7rem" }}>
                {" "}
                Väldigt stark{" "}
              </Typography>
            </Stack>
          </Box>
        ))
      ) : (
        <Typography> Välj en känsla </Typography>
      )}
    </Box>
  );
}

export default SlidersFromArray;
