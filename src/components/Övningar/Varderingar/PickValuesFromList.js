import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import VerktygAppbar from "../../Navigation/VerktygAppBar";
import { useNavigate } from "react-router-dom";
import VerktygKnapp from "../../Buttons/VerktygKnapp";
import ToolsContaioner from "../../Verktyg/VerktygContainer";
import values from "../../Data/values";
import MultiChoiceFromArray from "../../inputs/MultiChoiceFromArray";
import OvningResultat from "../OvningShowResultPage";
import saveSomething from "../../Saker/SmattOchGott/SaveSomething";
import ShowNrsPicked from "../../Saker/SmattOchGott/DataDisplay/ShowNrsPicked";

function PickValuesFromList() {
  // const valuesArr = values;
  //const smallscreen = useMediaQuery("(min-width:600px)");
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [valuesArr, setvaluesArr] = useState([...values]);
  const [sevenPicked, setsevenPicked] = useState();
  const [resetSelected, setresetSelected] = useState(false);

  /*   let LocalUtmanaNatArray = localStorage.getItem("utmanaNat")
    ? JSON.parse(localStorage.getItem("utmanaNat"))
    : { utmanaNat: [] }; */

  const [formData, setFormData] = useState({
    values: [],
  });

  useEffect(() => {
    // för att kunna se om användaren får gå vidare
    if (page === 0) {
      formData.values.length >= 7 ? setIsDone(true) : setIsDone(false);
    } else if (page === 1)
      formData.values.length === 3 ? setIsDone(true) : setIsDone(false);
  }, [formData, page]);

  useEffect(() => {
    // för att kunna se om användaren får gå vidare
    window.scroll(0, 0);
  }, [page]);

  // console.log(formData);

  const formDataSetter = (data) => {
    setFormData({
      ...formData,
      values: data,
    });
  };

  const onClickForward = () => {
    if (page === 0) {
      setsevenPicked(formData.values.slice());
    }
    console.log(valuesArr);
    console.log(page);
    {
      /* Spara ett object som kan användas i "textövningar resultat accordion*/
    }
    if (page === 1) {
      let valuesForSave = [];
      formData.values.forEach((item, index) => {
        valuesForSave[index] = item.name + ": " + item.desc;
      });
      let svar = {
        title: "Mina värderingsord",
        date: new Date().toLocaleDateString(),
        id: crypto.randomUUID(),
        anwsers: [{ question: "Dina värderingsord", anwser: valuesForSave }],
      };
      console.log(svar);

      saveSomething("ListaVardingersOrd", svar);
      console.log(svar);
      console.log("körst");
    }
    setPage(page + 1);
    setIsDone(false);
    window.scrollTo(0, 0);
  };

  const onClickBack = () => {
    console.log(page, "page");
    if (page === 1) {
      setvaluesArr([...values]);
    }
    page === 0 ? navigate("/verktyg") : setPage(page - 1);
    window.scrollTo(0, 0);
  };
  const [offset, setOffset] = useState(0);

  /*   useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []); */

  const ConditionalComponent = () => {
    switch (page) {
      case 0:
        return (
          <>
            <Box sx={{ mb: 3 }}>
              {" "}
              <Typography variant="h6">
                Välj dina viktigast värderingsord
              </Typography>
              <Typography>
                Börja med att läsa igenom listan och välj sedan{" "}
                <Typography
                  display="inline"
                  sx={{ fontWeight: 700, textDecoration: "underline" }}
                >
                  minst sju{" "}
                </Typography>
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
                nrsPicked={formData.values.length}
                nrsToPick={"7"}
              />
            </Box>

            <MultiChoiceFromArray
              dataArr={valuesArr}
              formData={formData}
              setFormData={formDataSetter}
              resetSelected={false}
              setIsDone={setIsDone}
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
                <Typography
                  display="inline"
                  sx={{ fontWeight: 700, textDecoration: "underline" }}
                >
                  önskat
                </Typography>{" "}
                att du agerade i världen.
              </Typography>
            </Box>
            <Box
              sx={{
                visibility: offset > 100 ? "visible" : "hidden",
              }}
            >
              <ShowNrsPicked
                nrsPicked={formData.values.length}
                nrsToPick={"3"}
              />
            </Box>

            <MultiChoiceFromArray
              dataArr={sevenPicked}
              formData={formData}
              setFormData={formDataSetter}
              resetSelected={resetSelected}
              setresetSelected={setresetSelected}
              nrReq={3}
              setIsDone={setIsDone}
            />
          </>
        );
      case 2:
        return (
          <>
            <OvningResultat
              title={"Din tre valda värderingsord"}
              formData={formData}
              questionArr={[
                { question: "Jag vill vara", anwser: formData.values.slice() },
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
            <Box sx={{ backgroundColor: "#000", width: "100%" }}>
              <Typography> Ord valda: {formData.values.length}</Typography>
            </Box>
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
