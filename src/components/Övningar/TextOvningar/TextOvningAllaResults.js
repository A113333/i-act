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
import BackToVerktygButton from "../../Buttons/BackToVerktygButton";
import { useParams } from "react-router-dom";

function TextOvningAllaResults() {
  const params = useParams();
  const ovningName = params.name;

  console.log(ovningName);

  const [resultsArr, setresultsArr] = useLocalStorageState(ovningName, {
    defaultValue: [].reverse(),
  });
  console.log(resultsArr);
  const removeItem = (item) => {
    let resultArrHere = [...resultsArr];
    console.log("resultArr");
    console.log(resultArrHere);
    // setUtmanaNat(resultArr.splice(item, 1));
    resultArrHere.splice(item, 1);
    setresultsArr(resultArrHere);
    //console.log(item);
  };
  console.log(resultsArr);
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
                    {Array.isArray(item.anwsers[0].anwser)
                      ? item.anwsers[0].anwser[0]
                      : item.anwser}
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
                        <Typography sx={{}}>
                          {Array.isArray(item.anwser)
                            ? item.anwser.map((item, index) => <li> {item}</li>)
                            : item.anwser}
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

export default TextOvningAllaResults;
