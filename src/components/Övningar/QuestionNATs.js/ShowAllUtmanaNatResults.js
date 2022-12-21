import React, { useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AppBar from "../../Navigation/IactAppBar";

import useLocalStorageState from "use-local-storage-state";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import VerktygContainer from "../../Verktyg/VerktygContainer";
import RemoveButton from "../../Buttons/RemoveButton";
import HeadlineWithDivider from "../../Saker/SmattOchGott/HeadlineWithDivider";
import BackToVerktygButton from "../../Buttons/BackToVerktygButton";

function ViewNatsResults() {
  const [utmanaNat, setUtmanaNat] = useLocalStorageState("utmanaNat", {
    defaultValue: [],
  });
  console.log(utmanaNat, "utmanaNat");

  useEffect(() => {}, []);

  const HeadlineText = ({ text }) => {
    return (
      <Box
        sx={{
          opacity: "60%",
        }}
      >
        <Typography sx={{ mb: 1 }} variant="body1">
          {text}
        </Typography>
      </Box>
    );
  };

  const customPb = 5;

  const removeItem = (item) => {
    let resultArr = [...utmanaNat];
    console.log("resultArr");
    console.log(resultArr);
    // setUtmanaNat(resultArr.splice(item, 1));
    resultArr.splice(item, 1);

    setUtmanaNat(resultArr);
    //console.log(item);
  };

  return (
    <>
      <AppBar />
      <VerktygContainer>
        <HeadlineWithDivider>
          {" "}
          {utmanaNat.length > 0
            ? "Dina sparade tankeutmaningar"
            : "Du verkar inte ha genomfört några övningar"}
        </HeadlineWithDivider>

        {utmanaNat.lenght === 0 || utmanaNat === undefined ? (
          <Typography> Inga övningar sparade :( </Typography>
        ) : (
          utmanaNat.reverse().map((item, index) => {
            return (
              <>
                <Accordion
                  key={item.id ? item.id : index}
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
                      {item.date ? item.date : new Date().toLocaleDateString()}{" "}
                      Tanke: {item.tanke}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box
                      sx={{
                        textAlign: "left",
                        width: "70%",
                        m: "auto",
                        pt: 2,
                        width: { xs: "100%", sm: "75%" },
                      }}
                    >
                      <HeadlineText text="Din ursprungliga tanke:" />
                      <Typography
                        sx={{
                          pb: customPb,
                        }}
                      >
                        "{item.tanke}"
                      </Typography>
                      <HeadlineText text="Innan övningen trodde du på din tanken till:" />
                      <Typography
                        sx={{
                          pb: customPb,
                        }}
                      >
                        {item.troPaTanke} %
                      </Typography>
                      <HeadlineText text="Efter övningen trodde du på din tanken till" />
                      <Typography
                        sx={{
                          pb: customPb,
                        }}
                      >
                        {item.troPaTankeEfter} %
                      </Typography>
                      <Box sx={{ pb: customPb }}>
                        <HeadlineText text={"Dina bevis för din tanke:"} />

                        {item.bevisForTanke.map((item, index) => (
                          <li key={index}>
                            <Typography display="inline">{item}</Typography>
                          </li>
                        ))}
                      </Box>
                      <Box sx={{ pb: customPb }}>
                        <HeadlineText text={"Dina bevis emot din tanke:"} />

                        {item.bevisMotTanke.map((item, index) => (
                          <li key={index}>
                            <Typography display="inline" sx={{ pb: 1 }}>
                              {" "}
                              {item}
                            </Typography>
                          </li>
                        ))}
                      </Box>
                      {item.tankeFallor ? (
                        <Box sx={{ pb: customPb }}>
                          <HeadlineText
                            text={"Du använde följande tankefällor"}
                          />

                          {item.tankeFallor.map((item, index) => (
                            <li>
                              <Typography display="inline" key={index}>
                                {item.name}
                              </Typography>
                            </li>
                          ))}
                        </Box>
                      ) : null}
                      <Box sx={{ pb: customPb }}>
                        <HeadlineText text="Din mer balanseradetanke:" />
                        <Typography>{item.balanseradTanke}</Typography>
                      </Box>
                      <Box sx={{ pb: customPb }}>
                        <HeadlineText text="Dina känslor i situationen:" />

                        {item.kanslorUnder.map((data) => {
                          return (
                            <li key={index}>
                              {" "}
                              <Typography display="inline">
                                {data.name} : {data.value}%
                              </Typography>{" "}
                            </li>
                          );
                        })}
                      </Box>
                      <Box sx={{ pb: customPb }}>
                        <HeadlineText text="Dina känslor efter övningen:" />

                        {item.kanslorEfter.map((data, index) => {
                          return (
                            <li key={index}>
                              {" "}
                              <Typography display="inline">
                                {data.name}: {data.value}%
                              </Typography>
                            </li>
                          );
                        })}
                      </Box>
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
            );
          })
        )}

        <BackToVerktygButton />
      </VerktygContainer>
    </>
  );
}

export default ViewNatsResults;
