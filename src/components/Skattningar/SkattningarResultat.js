import React, { useState } from "react";
import VerktygContainer from "../Verktyg/VerktygContainer";
import { CategoryScale } from "chart.js";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import useTheme from "@mui/material/styles/useTheme";
import { Button, Divider, Typography } from "@mui/material";
import AppBar from "../Navigation/IactAppBar";
import { Box } from "@mui/system";
import useLocalStorageState from "use-local-storage-state";
import { useParams } from "react-router-dom";
import BackToVerktygButton from "../Buttons/BackToVerktygButton";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { GAD7, MADRAS, LSASSR, PHQ9 } from "./SkattningarData";
import RemoveButton from "../Buttons/RemoveButton";

function SkattningarResultat({ titel, name, max, label }) {
  const [resultsArr, setresultsArr] = useLocalStorageState(name, {
    defaultValue: [],
  });

  const [nameOfSkattning, setname] = useState(name);

  const theme = useTheme();
  let resultsForChart = resultsArr.map(({ resultat }) => Number(resultat));
  let lableArr = resultsArr.map(({ date }) => date);
  // window.scrollTo(0, 0);

  console.log(nameOfSkattning, "nameOfSkattning");

  // const results = resultsArr ? JSON.parse(resultsArr) : [];

  let skattningsObj;

  switch (true) {
    case nameOfSkattning === "GAD7":
      skattningsObj = GAD7;
      break;
    case nameOfSkattning === "MADRAS-S":
      skattningsObj = MADRAS;
      break;
    case nameOfSkattning === "LSAS-SR":
      skattningsObj = LSASSR;
      break;
    case nameOfSkattning === "PHQ9":
      skattningsObj = PHQ9;
      break;
    default:
      skattningsObj = PHQ9;
  }

  console.log(skattningsObj, "skattningsObj");

  const removeItem = (item) => {
    let resultArrHere = [...resultsArr];
    console.log("resultArr");
    console.log(resultArrHere);
    // setUtmanaNat(resultArr.splice(item, 1));
    resultArrHere.splice(item, 1);
    setresultsArr(resultArrHere);
    //console.log(item);
  };

  return (
    <>
      <AppBar />
      <VerktygContainer>
        <Typography variant="h6">
          {resultsArr.length > 0 ? titel : "Det finns inga skattningar sparade"}
        </Typography>

        <Typography>
          {resultsArr.length > 1
            ? null
            : "Genomför minst två skattningar för att se diagram över hur ditt mående har utvecklats"}
        </Typography>
        <Box
          sx={{
            height: `calc(70vh - 65px)`,
            display: resultsArr.length > 1 ? null : "none",
          }}
        >
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
          {resultsArr.reverse().map((item, index) => (
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
                    Totalt poäng: {item.resultat}
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
                            mb: 1,
                            fontWeight: 1000,
                          }}
                        >
                          {/* Visar frågan från skattningen*/}
                          {index + 1 + ". "}
                          {skattningsObj.questionArr[index].question}
                        </Typography>

                        {/* Visar svaret från skattningen*/}
                        <Box
                          sx={{
                            display: "table",
                            width: "100%",
                            tableLayout: "fixed",
                          }}
                        >
                          {skattningsObj.questionArr[
                            index
                          ].svarsalternativ?.map((item2, index) => (
                            <Box
                              display="table-cell"
                              sx={{
                                opacity: index === item.anwser ? "100%" : "50%",
                                textAlign: "left",
                              }}
                            >
                              <Typography
                                display="block"
                                sx={{
                                  borderRadius: "50%",
                                  width: "1.5rem",
                                  height: "1.5rem",
                                  lineHeight: "1.5rem",
                                  border:
                                    index === item.anwser
                                      ? "0.5px solid #000"
                                      : "none",
                                  textAlign: "center",
                                  fontSize: "1rem",
                                }}
                              >
                                {skattningsObj.startZero ? index : index + 1}
                              </Typography>
                            </Box>
                          ))}
                        </Box>
                        <Typography sx={{ mb: 3, mt: 1 }}>
                          {
                            skattningsObj.questionArr[index].svarsalternativ[
                              item.anwser
                            ]
                          }
                        </Typography>
                        <Divider sx={{ mb: 3, mt: 1 }}></Divider>
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
