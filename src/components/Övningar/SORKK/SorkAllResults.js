import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import IactAppBar from "../../Navigation/IactAppBar";
import HeadlineWithDivider from "../../Saker/HeadlineWithDivider";
import VerktygContainer from "../../Verktyg/VerktygContainer";
import useLocalStorageState from "use-local-storage-state";
import RemoveButton from "../../Buttons/RemoveButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function SorkkAllResults({ formData, questionArr }) {
  const [resultsArr, setresultsArr] = useLocalStorageState("SORKK", {
    defaultValue: [
      {
        title: "Jag var påväg till affären1",
        date: new Date().toLocaleDateString(),
        anwsers: [
          { question: "Vad, när hur, med vem?", anwser: "response" },
          { question: "Vad, när hur, med vem?1", anwser: "organism" },
          { question: "Vad, när hur, med vem?12", anwser: "response" },
          { question: "Vad, när hur, med vem?3", anwser: "k1" },
          { question: "Vad, när hur, med vem?5", anwser: "k2" },
        ],
      },

      {
        title: "Jag var påväg till affären2",
        date: new Date().toLocaleDateString(),
        anwsers: [
          { question: "Vad, när hur, med vem?", anwser: "response" },
          { question: "Vad, när hur, med vem?1", anwser: "organism" },
          { question: "Vad, när hur, med vem?12", anwser: "response" },
          { question: "Vad, när hur, med vem?3", anwser: "k1" },
          { question: "Vad, när hur, med vem?5", anwser: "k2" },
        ],
      },
    ].reverse(),
  });

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
      <IactAppBar />
      <VerktygContainer>
        <HeadlineWithDivider>
          {resultsArr.length > 0
            ? " Samanställning av övningen"
            : "Du verkar inte ha genomfört några övningar"}
        </HeadlineWithDivider>
        <Box
          sx={{
            m: "auto",
            width: "100%",
          }}
        >
          {resultsArr.map((item, index) => (
            <>
              {" "}
              <Accordion
                sx={{
                  mx: 1,
                  mb: 2,
                  "&:before": {
                    display: "none",
                  },
                }}
                elevation={0}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <RemoveButton
                    onClick={() => removeItem(index)}
                    sx={{ zIndex: 999 }}
                  />
                  <Typography sx={{ pt: 0.7 }}>
                    {item.date + " " + item.title}
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
                    {item.anwsers?.map((item, index) => (
                      <>
                        <Typography
                          sx={{
                            opacity: "50%",
                            mb: 1,
                          }}
                        >
                          {item.question}
                        </Typography>
                        <Typography sx={{}}>{item.anwser}</Typography>
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
      </VerktygContainer>
    </>
  );
}

export default SorkkAllResults;
