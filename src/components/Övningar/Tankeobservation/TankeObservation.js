import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import VerktygKnapp from "../../Buttons/VerktygKnapp";
import SlidersFromArray from "../../inputs/SlidersFromArray";
import VerktygAppbar from "../../Navigation/VerktygAppBar";
import saveSomething from "../../Saker/SmattOchGott/SaveSomething";
import Feelings from "../../Verktyg/Feelings";
import VerktygContainer from "../../Verktyg/VerktygContainer";
import UpdateShowOvningsResultat from "../UpdatedShowOvningResults";

function TankeObservation() {
  const [page, setpage] = useState(0);
  const [isResultsPage, setisResultsPage] = useState(false);
  const [gotAwnser, setgotAwnser] = useState(false);
  const [situation, setsituation] = useState("");
  const [tanke, settanke] = useState("");
  const [feelings, setfeelings] = useState([]);

  const handelSetSituation = (e) => {
    setsituation(e.target.value);
    console.log(situation);
    setgotAwnser(true);
  };

  const handelSetTank = (e) => {
    settanke(e.target.value);
    console.log(situation);
    setgotAwnser(true);
  };

  useEffect(() => {
    if (page === 0) {
      situation === "" ? setgotAwnser(false) : setgotAwnser(true);
    }
    if (page === 1) {
      tanke === "" ? setgotAwnser(false) : setgotAwnser(true);
    }
    if (page === 2) {
      console.log("page2");
    }
    if (page === 3) {
      setisResultsPage(true);
      saveSomething("tankeobservation", saveObj);
    }
  }, [page]);

  const question1 = "Vad var din tanke?";
  const question2 = "Vad gjorde du när tanken kom?";
  const question3 = "Vilka känslor väckte tanken? ";

  let saveObj;
  const Page1 = () => {
    return (
      <>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Vad gjorde du när tanken kom?
        </Typography>
        <TextField
          autoComplete="off"
          autoFocus
          multiline
          rows={4}
          fullWidth
          value={situation}
          label="Beskriv situationen"
          onChange={(e) => handelSetSituation(e)}
        ></TextField>

        <Box sx={{ mb: 2, mt: 2, opacity: "75%" }}>
          <Typography>
            Var befann du dig? Vad skulle du göra? Med vem? När?
          </Typography>
          <Typography sx={{ mt: 1, opacity: "50%", fontSize: "0.9rem" }}>
            t ex. på jobbet, skulle hålla föredrag med mitt team måndag morgon.
          </Typography>
        </Box>
      </>
    );
  };

  const Page2 = () => {
    return (
      <>
        <Typography variant="h6" sx={{ mb: 2 }}>
          {question1}
        </Typography>
        <TextField
          autoComplete="off"
          autoFocus
          multiline
          rows={4}
          fullWidth
          label="jag tänkte..."
          value={tanke}
          onChange={(e) => handelSetTank(e)}
        ></TextField>

        <Box sx={{ mb: 2, mt: 2, opacity: "75%" }}>
          <Typography>
            Fundera över vad du tänkte just i stunden, fick du någon bild i
            huvudet? Vad var den starkaste tanken?
          </Typography>
          <Typography sx={{ mt: 1, opacity: "50%", fontSize: "0.9rem" }}>
            t ex. tänk om jag gör bort mig och dom skrattar åt mig.
          </Typography>
        </Box>
      </>
    );
  };

  const Page3 = () => {
    return (
      <>
        <Typography variant="h6" sx={{ textAlign: "center", mb: 1 }}>
          Vilka känslor väckte tanken?
        </Typography>
        <Typography sx={{ textAlign: "center", mb: 1 }}>
          Välj en eller flera känslor.
        </Typography>
        <Feelings setFormData={setfeelings} formData={feelings} />

        <SlidersFromArray
          setgotAwnser={setgotAwnser}
          sliderArr={feelings}
          setSliderArr={setfeelings}
          question={"Hur intensiva var känslorna?"}
          labelMax={"Väldigt stark"}
          labelMin={"Knappt märkbar"}
        />
      </>
    );
  };

  const Page4 = () => {
    saveObj = {
      titel: "Tankeobservation",
      id: crypto.randomUUID(),
      date: new Date().toLocaleDateString(),
      toShowOnSavedResults: tanke,
      anwsers: [
        { question: question1, anwser: tanke },
        { question: question2, anwser: situation },
        {
          question: question3,
          anwser: feelings.map((item) =>
            item.lable + ": " + item.value ? +"%" : " "
          ),
        },
      ],

      situation: situation,
      tanke: tanke,
      feelings: [...feelings],
    };
    console.log("saveObj", saveObj);

    return (
      <>
        <UpdateShowOvningsResultat
          formData={saveObj}
          questionArr={saveObj.anwsers}
        />
      </>
    );
  };

  const conditionalComponent = () => {
    switch (page) {
      case 0:
        return Page1();
      case 1:
        return Page2();
      case 2:
        return Page3();
      case 3:
        return Page4();

      default:
        return Page1();
    }
  };

  return (
    <>
      <VerktygAppbar
        step={page + 1}
        numberOfSteps={3}
        isResultsPage={isResultsPage}
      />

      <VerktygContainer>
        {conditionalComponent()}
        <VerktygKnapp
          page={page}
          isDone={gotAwnser}
          setPage={setpage}
          setIsDone={setgotAwnser}
          isResultsPage={isResultsPage}
        />
      </VerktygContainer>
    </>
  );
}

export default TankeObservation;
