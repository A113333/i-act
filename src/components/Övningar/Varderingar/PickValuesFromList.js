import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import VerktygAppbar from "../../Navigation/VerktygAppBar";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import useTheme from "@mui/material/styles/useTheme";
import VerktygKnapp from "../../Buttons/VerktygKnapp";
import ToolsContaioner from "../../Verktyg/VerktygContainer";
import values from "../../Data/values";
import MultiChoiceFromArray from "../../inputs/MultiChoiceFromArray";
import OvningResultat from "../OvningShowResult";

function PickValuesFromList() {
  // const valuesArr = values;
  //const smallscreen = useMediaQuery("(min-width:600px)");
  const params = useParams();
  const { sida } = params;
  const sidaParams = Number(sida);
  const theme = useTheme();
  const [page, setPage] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [valuesArr, setvaluesArr] = useState([...values]);
  const [restSelected, setrestSelected] = useState(false);

  /*   let LocalUtmanaNatArray = localStorage.getItem("utmanaNat")
    ? JSON.parse(localStorage.getItem("utmanaNat"))
    : { utmanaNat: [] }; */

  const [formData, setFormData] = useState({
    // heter "question" för att resultat componeten ska visa den på rätt sätt
    title: "Mina värderingsord",
    values: [],
  });

  useEffect(() => {
    // för att kunna se om användaren får gå vidare
    if (page === 0)
      formData.values.length >= 7 ? setIsDone(true) : setIsDone(false);
    else if (page == 1)
      formData.values.length === 3 ? setIsDone(true) : setIsDone(false);
  }, [formData]);

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

    if (page === 1) {
      console.log("page === 1 ska sparas");
    }
    setPage(page + 1);
    setIsDone(false);
    window.scrollTo(0, 0);
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
            <Typography> Ord valda: {formData.values.length}</Typography>
          </>
        );
      case 1:
        return (
          <>
            <Typography>Välj nu dom tre viktigaste värderna </Typography>
            <Typography> Ord valda: {formData.values.length}</Typography>
          </>
        );
      case 2:
        return (
          <>
            <Typography variant="h6">
              Nedan ser du dina tre viktigaste värderingar
            </Typography>
            <Typography> Jag vet inte vad jag ska skriva här</Typography>
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
            <Typography> Ord valda: {formData.values.length}</Typography>
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
            formData={formData}
            questionArr={[
              { question: formData.title, anwser: formData.values.slice() },
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
          />
        </Box>
      </ToolsContaioner>
    </>
  );
}

export default PickValuesFromList;
