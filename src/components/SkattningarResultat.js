import React from "react";
import VerktygContainer from "./Saker/SmattOchGott/VerktygContainer";
import { CategoryScale } from "chart.js";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import useTheme from "@mui/material/styles/useTheme";
import { Button, Typography } from "@mui/material";
import AppBar from "./IactAppBar";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import BackToVerktygButton from "./Saker/SmattOchGott/BackToVerktygButton";

function SkattningarResultat({ titel, name, max, label }) {
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
        <Typography>
          {results.lenght !== 0
            ? titel
            : "Det verkar inte finnas några sparade resultat"}{" "}
        </Typography>
        <Box sx={{ height: `calc(70vh - 65px)` }}>
          <Line
            options={{
              maintainAspectRatio: false,
              scales: {
                yAxis: {
                  min: 0,
                  max: max,
                },
              },
            }}
            data={{
              // x-axis label values
              labels: lableArr,
              datasets: [
                {
                  label: label,
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
        </Box>
        <BackToVerktygButton />
      </VerktygContainer>
    </>
  );
}

export default SkattningarResultat;
