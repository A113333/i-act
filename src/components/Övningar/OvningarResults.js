import React, { useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import BlackBoxWithText from "../Saker/SmattOchGott/BlackBoxWithText";
import AppBar from "../Navigation/IactAppBar";
import useLocalStorageState from "use-local-storage-state";
import VerktygContainer from "../Verktyg/VerktygContainer";
import RemoveButton from "../Buttons/RemoveButton";
import HeadlineWithDivider from "../Saker/HeadlineWithDivider";
import BackToVerktygButton from "../Buttons/BackToVerktygButton";

function OvningarResults({ ovningName, questionArr }) {
  const [ovning, setovning] = useLocalStorageState(ovningName, {
    defaultValue: [],
  });

  const customPb = 5;

  const removeItem = (item) => {
    let resultArr = [...ovning];
    console.log("resultArr");
    console.log(resultArr);
    // setUtmanaNat(resultArr.splice(item, 1));
    resultArr.splice(item, 1);

    setovning(resultArr);
    //console.log(item);
  };

  const reversedArr = ovning.reverse();

  return (
    <>
      <AppBar />
      <VerktygContainer>
        <HeadlineWithDivider>
          {" "}
          {ovning.length > 0
            ? "Dina sparade övningar"
            : "Du verkar inte ha genomfört några övningar"}
        </HeadlineWithDivider>

        {ovning.lenght === 0 || ovning === undefined ? (
          <Typography> Inga övningar sparade :( </Typography>
        ) : (
          reversedArr.map((item, index) => {
            return (
              <>
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
                    <RemoveButton onClick={() => removeItem(index)} />

                    <Typography sx={{ pt: 0.7 }}>
                      Datum:{" "}
                      {item.date ? item.date : new Date().toLocaleDateString()}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    {questionArr.map((item, index) => (
                      <>
                        <Typography
                          sx={{
                            opacity: "50%",
                            mb: 1,
                          }}
                        >
                          {item.question}
                        </Typography>
                        <Typography
                          sx={{
                            pb: customPb,
                          }}
                        >
                          {formData[item.name]}
                        </Typography>
                      </>
                    ))}
                  </AccordionDetails>
                </Accordion>
              </>
            );
          })
        )}

        <BackToVerktygButton />
      </VerktygContainer>
    </>
  );
}

export default OvningarResults;
