import React from "react";
import VerktygContainer from "../Verktyg/VerktygContainer";
import { CategoryScale } from "chart.js";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import useTheme from "@mui/material/styles/useTheme";
import { Button, Typography } from "@mui/material";
import AppBar from "../Navigation/IactAppBar";
import { Box } from "@mui/system";
import useLocalStorageState from "use-local-storage-state";
import { useParams } from "react-router-dom";
import BackToVerktygButton from "../Buttons/BackToVerktygButton";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import lsassr from "../Skattningar/SkattningarData/LSAS-SR.js";

import RemoveButton from "../Buttons/RemoveButton";

function SkattningarResultat({ titel, name, max, label }) {
  let resultsArr = localStorage.getItem(name);
  const theme = useTheme();
  const results = resultsArr ? JSON.parse(resultsArr) : [];
  let resultsForChart = results.map(({ resultat }) => Number(resultat));

  console.log(results, "results");

  // const results = resultsArr ? JSON.parse(resultsArr) : [];

  let questionArr = lsassr.questionArr;

  console.log(questionArr, "questionArr");

  let resultsForAccordion = results.map((item, index) => {});

  /*   let lable = results.map(({ date }) =>
    date === undefined ? new Date() : date.toLocaleDateString()
  ); */
  let lableArr = results.map(({ date }) => date);

  const removeItem = (item) => {
    let resultArrHere = [...resultsArr];
    console.log("resultArr");
    console.log(resultArrHere);
    // setUtmanaNat(resultArr.splice(item, 1));
    resultArrHere.splice(item, 1);
    //setresultsArr(resultArrHere);
    //console.log(item);
  };

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

        <Box
          sx={{
            m: "auto",
            width: "100%",
          }}
        >
          {results.reverse().map((item, index) => (
            <>
              <Accordion
                key={item.id ? item.id : index}
                sx={{
                  mx: 1,
                  mb: 2,
                  "&:before": {
                    display: "none",
                  },
                  "&.MuiAccordionSummary-root:hover": {
                    backgroundColor: "#356da5",
                  },
                }}
                elevation={0}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  sx={{
                    ":hover": {
                      //transform: "scale(1.02)",
                      boxShadow: 1,
                    },
                  }}
                >
                  <RemoveButton
                    onClick={() => removeItem(index)}
                    sx={{ zIndex: 999 }}
                  />
                  <Typography sx={{ pt: 0.7, opacity: "50%", mr: 3 }} inline>
                    {item.date}
                  </Typography>
                  <Typography inline sx={{ pt: 0.7 }}>
                    totalt resultat: {item.resultat}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Box
                    sx={{
                      textAlign: "left",
                      width: "100%",
                      m: "auto",
                      pt: 2,
                    }}
                  >
                    {item.svar?.map((item, index) => (
                      <>
                        <Typography
                          sx={{
                            opacity: "50%",
                            mb: 1,
                          }}
                        >
                          {questionArr[index].question}
                        </Typography>
                        <Typography sx={{}}>
                          {questionArr[index].svarsalternativ[item.anwser]} (
                          {item.anwser})
                        </Typography>
                      </>
                    ))}
                  </Box>
                  <Button
                    variant="outlined"
                    sx={{ float: "right", mb: 2 }}
                    onClick={() => {
                      console.log(item);
                    }}
                  >
                    Skicka till din behandlare
                  </Button>
                </AccordionDetails>
              </Accordion>
            </>
          ))}
        </Box>
        <BackToVerktygButton />
      </VerktygContainer>
    </>
  );
}

export default SkattningarResultat;
