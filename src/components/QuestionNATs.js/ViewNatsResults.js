import React, { useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import BlackBoxWithText from "../Saker/SmattOchGott/BlackBoxWithText";
import AppBar from "../AppBar";

import useLocalStorageState from "use-local-storage-state";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import VerktygContainer from "../Saker/SmattOchGott/VerktygContainer";
import RemoveButton from "../Saker/SmattOchGott/RemoveButton";
import HeadlineWithDivider from "../Saker/HeadlineWithDivider";

function ViewNatsResults() {
  const [utmanaNat, setUtmanaNat] = useLocalStorageState("utmanaNat", {
    defaultValue: [],
  });

  useEffect(() => {}, []);

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
          Dina sparade tankeutmaningar{" "}
        </HeadlineWithDivider>

        {utmanaNat.lenght === 0 && utmanaNat === undefined ? (
          <Typography> Inga övningar sparade :( </Typography>
        ) : (
          utmanaNat.map((item, index) => {
            return (
              <>
                {" "}
                <Accordion sx={{ mx: 1, mb: 3 }} elevation={0}>
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
                      <BlackBoxWithText text={"Din ursprungliga tanke:"} />
                      <Typography
                        sx={{
                          pb: customPb,
                        }}
                      >
                        "{item.tanke}"
                      </Typography>
                      <Typography
                        sx={{
                          opacity: "50%",
                        }}
                      >
                        Innan övningen trodde du på din tanken till:{" "}
                      </Typography>{" "}
                      <Typography
                        sx={{
                          pb: customPb,
                        }}
                      >
                        {" "}
                        {item.troPaTanke} %
                      </Typography>
                      <Typography
                        sx={{
                          opacity: "50%",
                        }}
                      >
                        Efter övningen trodde du på din tanken till
                      </Typography>{" "}
                      <Typography
                        sx={{
                          pb: customPb,
                        }}
                      >
                        {item.troPaTankeEfter} %
                      </Typography>
                      <Box sx={{ pb: customPb }}>
                        <BlackBoxWithText text={"Dina bevis för din tanke:"} />
                        <ul>
                          {" "}
                          {item.bevisForTanke.map((item, index) => (
                            <li>
                              <Typography display="inline">{item}</Typography>
                            </li>
                          ))}
                        </ul>
                      </Box>
                      <Box sx={{ pb: customPb }}>
                        <BlackBoxWithText text={"Dina bevis emot din tanke:"} />
                        <ul>
                          {" "}
                          {item.bevisMotTanke.map((item, index) => (
                            <li>
                              <Typography sx={{ pb: 1 }}> {item}</Typography>
                            </li>
                          ))}
                        </ul>
                      </Box>{" "}
                      {item.tankeFallor ? (
                        <Box sx={{ pb: customPb }}>
                          <BlackBoxWithText
                            text={"Du använde följande tankefällor"}
                          />
                          <ul>
                            {item.tankeFallor.map((item, index) => (
                              <li>
                                <Typography>{item.name}</Typography>
                              </li>
                            ))}
                          </ul>
                        </Box>
                      ) : null}
                      <Box sx={{ pb: customPb }}>
                        <BlackBoxWithText text="Din mer balanseradetanke:" />
                        <Typography>{item.balanseradTanke}</Typography>
                      </Box>
                      <Box sx={{ pb: customPb }}>
                        <BlackBoxWithText text="Dina känslor i situationen:" />
                        <ul>
                          {item.kanslorUnderIntensitet.map((data) => {
                            return (
                              <li>
                                {" "}
                                <Typography>
                                  {data.lable} : {data.value}%
                                </Typography>{" "}
                              </li>
                            );
                          })}
                        </ul>
                      </Box>
                      <Box sx={{ pb: customPb }}>
                        <BlackBoxWithText text="Dina känslor efter övningen:" />
                        <ul>
                          {item.kanslorEfter.map((data, index) => {
                            return (
                              <li>
                                {" "}
                                <Typography>
                                  {data.label}: {data.value}%
                                </Typography>
                              </li>
                            );
                          })}
                        </ul>
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
      </VerktygContainer>
    </>
  );
}

export default ViewNatsResults;
