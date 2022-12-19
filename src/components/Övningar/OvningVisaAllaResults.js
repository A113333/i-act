import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Divider,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import IactAppBar from "../Navigation/IactAppBar";
import HeadlineWithDivider from "../Saker/SmattOchGott/HeadlineWithDivider";
import VerktygContainer from "../Verktyg/VerktygContainer";
import useLocalStorageState from "use-local-storage-state";
import RemoveButton from "../Buttons/RemoveButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import BackToVerktygButton from "../Buttons/BackToVerktygButton";
import { useParams } from "react-router-dom";

function OvningVisaAllaResults() {
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
            ? "Dina sparade övningar"
            : "Du verkar inte ha genomfört några övningar"}
        </HeadlineWithDivider>
        <Box
          sx={{
            m: "auto",
            width: "100%",
          }}
        >
          {resultsArr.reverse().map((sparadOvning, index) => (
            <>
              <Accordion
                key={sparadOvning.id ? sparadOvning.id : index}
                sx={{
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
                    {sparadOvning.date}:
                  </Typography>
                  <Typography inline sx={{ pt: 0.7 }}>
                    {/* Om första svaret är en array, visar första itemet i den arrayen annars bara svaret */}
                    {sparadOvning.showOnResultAccordion
                      ? sparadOvning.showOnResultAccordion
                      : Array.isArray(sparadOvning.anwsers[0].anwser)
                      ? sparadOvning.anwsers[0].anwser[0]
                      : sparadOvning.anwsers[0].anwser}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Box
                    sx={{
                      textAlign: "left",
                      width: "100%",
                    }}
                  >
                    {sparadOvning.anwsers?.map((item, index) => (
                      <>
                        <Typography
                          sx={{
                            opacity: "50%",
                            mx: 4,
                          }}
                        >
                          {item.question}
                        </Typography>
                        <Box sx={{ mb: 2, mx: 4 }}>
                          <Typography sx={{}}>
                            {Array.isArray(item.anwser)
                              ? item.anwser.map((item, index) => (
                                  <li> {item}</li>
                                ))
                              : item.anwser}
                          </Typography>
                        </Box>
                        {index !== sparadOvning.anwsers.length - 1 && (
                          <Divider sx={{ mb: 2 }}></Divider>
                        )}
                      </>
                    ))}
                  </Box>
                  <Button
                    variant="outlined"
                    sx={{ float: "right", mb: 2 }}
                    onClick={() => {
                      console.log(sparadOvning);
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

export default OvningVisaAllaResults;
