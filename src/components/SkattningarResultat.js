import React from "react";
import VerktygContainer from "./Saker/SmattOchGott/VerktygContainer";
import { CategoryScale } from "chart.js";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import useTheme from "@mui/material/styles/useTheme";
import { Typography } from "@mui/material";
import AppBar from "./AppBar";
import { Box } from "@mui/system";

function SkattningarResultat({ titel, name }) {
  let resultsArr = localStorage.getItem(name);
  const theme = useTheme();
  const results = resultsArr ? JSON.parse(resultsArr) : [];

  let resultsForChart = results.map(({ resultat }) => Number(resultat));
  console.log(titel);

  /*   let lable = results.map(({ date }) =>
    date === undefined ? new Date() : date.toLocaleDateString()
  ); */
  let lableArr = results.map(({ date }) => date);
  console.log(lableArr);

  console.log(JSON.parse(resultsArr));
  return (
    <>
      <AppBar />
      <VerktygContainer>
        <Typography>{titel}</Typography>
        <Box sx={{ height: `calc(70vh - 65px)` }}>
          {results ? (
            <Line
              options={{
                maintainAspectRatio: false,
                scales: {
                  yAxis: {
                    min: 0,
                    max: 21,
                  },
                },
              }}
              data={{
                // x-axis label values
                labels: lableArr,
                datasets: [
                  {
                    label: "Ångestsymptom",
                    // y-axis data plotting values
                    data: resultsForChart,
                    fill: false,
                    borderWidth: 1,
                    backgroundColor: theme.palette.primary.main,
                    borderColor: theme.palette.primary.main,
                    responsive: true,
                  },
                ],
              }}
            />
          ) : (
            <Typography>
              {" "}
              Det verkar inte finnas några sparade resultat
            </Typography>
          )}
        </Box>
      </VerktygContainer>
    </>
  );
}

export default SkattningarResultat;
