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

function PickValuesFromList() {
  // const valuesArr = values;
  //const smallscreen = useMediaQuery("(min-width:600px)");
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [valuesArr, setvaluesArr] = useState([...values]);
  const [restSelected, setrestSelected] = useState(false);

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
    setvaluesArr(formData.values.slice());
    console.log(valuesArr);
    console.log(page);
    setrestSelected(true);
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

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const howManyPickedStyle = {
    backgroundColor: "primary.main",
    color: "secondary.main",
    position: "fixed",
    top: "75px",
    p: 1,
    left: 0,
    border: "0.5px solid #f5f7f9",
    borderRadius: "0px 10px 10px 0px",
    opacity: "100%",
    zIndex: 1000,
  };

  const ConditionalTextComponent = () => {
    switch (page) {
      case 0:
        return (
          <>
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

            <Box
              sx={{
                visibility: offset > 352 ? "visible" : "hidden",
              }}
            >
              <Typography display="span" sx={howManyPickedStyle}>
                valda: {formData.values.length}
                <Typography
                  sx={{
                    fontSize: "0.8rem",
                    opacity: "50%",
                    textAlign: "center",
                  }}
                >
                  välj minst 7
                </Typography>
              </Typography>
            </Box>
          </>
        );
      case 1:
        return (
          <>
            <Typography variant="h6">
              Välj nu dom tre viktigaste värderingsorden{" "}
            </Typography>
            <Typography display="inline">
              tänk på att välja utifrån hur du{" "}
              <Typography
                display="inline"
                sx={{ fontWeight: 700, textDecoration: "underline" }}
              >
                önskat
              </Typography>{" "}
              att du agerade i världen.
            </Typography>
            <Box
              sx={{
                visibility: offset > 100 ? "visible" : "hidden",
              }}
            >
              <Typography display="span" sx={howManyPickedStyle}>
                valda: {formData.values.length}
                <Typography
                  sx={{
                    fontSize: "0.8rem",
                    opacity: "50%",
                    textAlign: "center",
                  }}
                >
                  av 3
                </Typography>
              </Typography>
            </Box>
          </>
        );
      case 2:
        return (
          /* rubrik för resultat delen, är tom då rubriken finns i resultat compentnt */
          <></>
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
        <Box sx={{ mb: 3 }}>
          <ConditionalTextComponent />
        </Box>
        {page !== 2 ? (
          <MultiChoiceFromArray
            dataArr={valuesArr}
            formData={formData}
            setFormData={formDataSetter}
            restSelected={restSelected}
            setrestSelected={setrestSelected}
            nrReq={page === 1 ? 3 : false}
            setIsDone={setIsDone}
          />
        ) : (
          <OvningResultat
            title={"Din tre valda värderingsord"}
            formData={formData}
            questionArr={[
              { question: "Jag vill vara", anwser: formData.values.slice() },
            ]}
          />
        )}
        <Box sx={{ pb: 3 }}>
          <VerktygKnapp
            page={page}
            setPage={setPage}
            lastPage={2}
            isDone={isDone}
            onClickForward={() => onClickForward()}
            isResultsPage={page + 1 === 3}
            onClickBack={() => onClickBack()}
          />
        </Box>
      </ToolsContaioner>
    </>
  );
}

export default PickValuesFromList;
