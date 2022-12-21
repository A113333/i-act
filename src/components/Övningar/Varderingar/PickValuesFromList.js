import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import VerktygAppbar from "../../Navigation/VerktygAppBar";
import { useNavigate } from "react-router-dom";
import VerktygKnapp from "../../Buttons/VerktygKnapp";
import ToolsContaioner from "../../Verktyg/VerktygContainer";
import values from "../../Data/values";
import MultiChoiceFromArray from "../../inputs/MultiChoiceFromArray";
import OvningResultat from "../UpdatedShowOvningResults";
import saveSomething from "../../Saker/SmattOchGott/SaveSomething";
import ShowNrsPicked from "../../Saker/SmattOchGott/DataDisplay/ShowNrsPicked";

function PickValuesFromList() {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [isDone, setIsDone] = useState(false);
  // sevenPicked är de sju som använderen väljer i steg ett och som ska visas i steg 2
  const [sevenPicked, setsevenPicked] = useState();
  // selected är ett Set som används av multichoice arr för att visa vilka som är valda
  const [selectedFirstPage, setselectedFirstPage] = useState(new Set());
  const [selectedSecondPage, setselectedSecondPage] = useState(new Set());
  const [userValues, setuserValues] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.scroll(0, 0);
  }, [page]);

  //
  let valuesForSave = [];
  const onClickForward = () => {
    if (page === 0) {
      setsevenPicked(userValues.slice());
      // sätter new Set() till tomat så att valda inte ballar ur när man backat
      setselectedSecondPage(new Set());
      setPage(page + 1);
    }
    /* Spara ett object som kan användas i "textövningar resultat accordion*/
    if (page === 1) {
      console.log(userValues, "userValues");
      userValues.forEach((item, index) => {
        userValues[index] = item.name + ": " + item.desc;
      });
      let svar = {
        title: "Mina värderingsord",
        date: new Date().toLocaleDateString(),
        id: crypto.randomUUID(),
        anwsers: [{ question: "Dina värderingsord", anwser: userValues }],
      };

      saveSomething("ListaVardingersOrd", svar);
      console.log(valuesForSave, "valuesForSave");
      setPage(page + 1);
    }

    setIsDone(false);
    window.scrollTo(0, 0);
  };

  const onClickBack = () => {
    if (page === 0) navigate("/verktyg");
    else {
      setIsDone(true);
      setPage(page - 1);
    }
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [offset]);

  const ConditionalComponent = () => {
    switch (page) {
      case 0:
        return (
          <>
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6">
                Välj dina viktigast värderingsord
              </Typography>
              <Typography display="inline">
                Börja med att läsa igenom listan och välj sedan{" "}
              </Typography>
              <Typography
                display="inline"
                sx={{ fontWeight: 700, textDecoration: "underline" }}
              >
                minst sju{" "}
              </Typography>
              <Typography display="inline">
                värderingsord som bäst beskriver hur du hade önskat att du
                agerade i världen.
              </Typography>
              <Typography sx={{ opacity: "50%" }}>
                Har du svårt att välja? Testa att föreställ dig din egna
                begravning, se framför dig hur den som kände dig bäst i livet
                går fram för att hålla ett tal. Fundera sedan över vilka ord du
                hade önskat hen använde för att beskriva dig. Alltså hur hade du
                VELAT bli ihågkommen?
              </Typography>
            </Box>

            {/* Box för att gömma hur många valda innan scroll */}
            <Box
              sx={{
                visibility: offset > 352 ? "visible" : "hidden",
              }}
            >
              <ShowNrsPicked
                nrsPicked={selectedFirstPage.size}
                nrsToPick={"7"}
              />
            </Box>

            <MultiChoiceFromArray
              dataArr={values}
              setFormData={setuserValues}
              selected={selectedFirstPage}
              setselected={setselectedFirstPage}
              setIsDone={setIsDone}
              minNrToSelect={4}
            />
          </>
        );
      case 1:
        return (
          <>
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6">
                Välj nu dom tre viktigaste värderingsorden{" "}
              </Typography>
              <Typography display="inline">
                Tänk på att välja utifrån hur du{" "}
              </Typography>
              <Typography
                display="inline"
                sx={{ fontWeight: 700, textDecoration: "underline" }}
              >
                önskat
              </Typography>
              <Typography display="inline">
                att du agerade i världen.
              </Typography>
            </Box>
            <Box
              sx={{
                visibility: offset > 100 ? "visible" : "hidden",
              }}
            >
              <ShowNrsPicked
                nrsPicked={selectedSecondPage.size}
                nrsToPick={"3"}
              />
            </Box>

            <MultiChoiceFromArray
              dataArr={sevenPicked}
              setFormData={setuserValues}
              selected={selectedSecondPage}
              setselected={setselectedSecondPage}
              maxNrToSelect={3}
              setIsDone={setIsDone}
            />
          </>
        );
      case 2:
        return (
          <>
            <OvningResultat
              title={"Din tre valda värderingsord"}
              questionArr={[
                {
                  question: "Jag vill vara...",
                  anwser: userValues,
                },
              ]}
            />
          </>
        );

      default:
        return (
          <>
            <Typography variant="h6">
              Välj dina viktigast värderingsord
            </Typography>
            <Typography>
              Börja med att läsa igenom listan och välj sedan minst sju
              värderingsord som bäst beskriver hur du hade önskat att du agerade
              i världen.
            </Typography>
            <Typography sx={{ opacity: "50%" }}>
              Har du svårt att välja? Testa att föreställ dig din egna
              begravning, se framför dig hur den som kände dig bäst i livet går
              fram för att hålla ett tal. Fundera sedan över vilka ord du hade
              önskat hen använde för att beskriva dig. Alltså hur hade du VELAT
              bli ihågkommen?
            </Typography>
            <Box sx={{ backgroundColor: "#000", width: "100%" }}></Box>
          </>
        );
    }
  };
  return (
    <>
      <VerktygAppbar
        step={page + 1}
        numberOfSteps={2}
        isResultsPage={page === 2}
      />
      <ToolsContaioner>
        <ConditionalComponent />

        <VerktygKnapp
          page={page}
          setPage={setPage}
          lastPage={2}
          isDone={isDone}
          onClickForward={() => onClickForward()}
          isResultsPage={page + 1 === 3}
          onClickBack={() => onClickBack()}
        />
      </ToolsContaioner>
    </>
  );
}

export default PickValuesFromList;
