import { Button, Typography } from "@mui/material";
import React, { useState } from "react";
import ToolsAppBar from "./VerktygAppBar";
import VerktygKnapp from "./SmattOchGott/VerktygKnapp";
import useTheme from "@mui/material/styles/useTheme";
import VerktygContainer from "./SmattOchGott/VerktygContainer";
import { Link } from "react-router-dom";
import RadioButtonFromArray from "../inputs/RadioButtonFromArray";

function Skattningar({ instruktioner, questionArr, startZero, scoring, name }) {
  const [page, setPage] = useState(0);
  const [isDone, setGotAnwser] = useState(false);
  const [anwserArr, setanwserArr] = useState([]);
  const [selectedValue, setselectedValue] = useState();
  const [isLastPage, setisLastPage] = useState(false);

  const theme = useTheme();
  const nrOfPages = questionArr.length;
  let localSave = localStorage.getItem(name)
    ? JSON.parse(localStorage.getItem(name))
    : [];

  const onClickForward = () => {
    // om man clickar på knappen för "visa resultat", dvs på sista frågan
    if (page + 1 === nrOfPages) {
      setisLastPage(true);
      // skapar ett svarsobject och sprarar det till localstorage
      let svar = [...anwserArr];
      let resultat = getResults();
      let resultName = getScoreInName(sumResults);
      let item = {
        svar: svar,
        resultat: Number(resultat),
        resultatName: resultName,
        date: new Date().toLocaleDateString(),
      };
      localSave.push(item);
      localStorage.setItem(name, JSON.stringify(localSave));
    }
    //   setselectedValue(); renasar radio buttons så ingen är förvald till nästa
    setselectedValue();
    setPage(page + 1);
    window.scrollTo(0, 0);
    setGotAnwser(false);
  };

  let sumResults = anwserArr.reduce(function (prev, current) {
    return prev + +Number(current.anwser);
  }, 0);

  const getScoreInName = (score) => {
    let scoreInName;
    if (scoring[0].score >= score) {
      return "Inga bekymmer";
    } else
      scoring.forEach((item, index) => {
        if (item.score <= score) {
          // console.log("resultat " + item.name);
          scoreInName = item.name;
        } else console.log("hittade ditt resultat!");
      });
    return scoreInName;
  };

  const getResults = () => {
    return sumResults.toString();
  };

  return (
    <>
      <ToolsAppBar step={page + 1} numberOfSteps={questionArr.length + 1} />
      <VerktygContainer>
        {page !== nrOfPages ? (
          <Typography variant="h6" sx={{ textAlign: "left" }}>
            Fråga {page + 1}
          </Typography>
        ) : null}

        {/*  Kollar om man är på sista steget, och byter ut frågan mot "klart" om färdigt */}
        <Typography variant="body1" sx={{ pt: 2, pb: 2, textAlign: "left" }}>
          {page !== questionArr.length ? questionArr[page].question : ""}
        </Typography>

        <Typography variant="body1" sx={{ opacity: "50%", fontSize: "0.8rem" }}>
          {/*  Kollar om man är på sista steget, och byter titel därefter */}
          {page !== questionArr.length
            ? instruktioner
            : "Här nedan kan du se ditt resultat"}
        </Typography>
        {/* om vi inte är på sista sida: visa fråga, annars visa resultat */}
        {page !== questionArr.length ? (
          <RadioButtonFromArray
            setanwserArr={setanwserArr}
            setselectedValue={setselectedValue}
            setGotAnwser={setGotAnwser}
            questionArr={questionArr}
            page={page}
            startZero={startZero}
            anwserArr={anwserArr}
            selectedValue={selectedValue}
          />
        ) : (
          <>
            {/* Det som visas om man är på resultatsidan */}
            <Typography>
              Du fick {sumResults} poäng, vilket indikerar{" "}
              {getScoreInName(sumResults)}
            </Typography>
            <Typography sx={{ pt: 10 }}>
              Vill du se hur ditt mående har förändrats över tid?
            </Typography>
            <Button component={Link} to="resultat" variant="outlined">
              Klicka här
            </Button>
          </>
        )}

        <VerktygKnapp
          page={page}
          setPage={setPage}
          onClickForward={onClickForward}
          lastPage={isLastPage}
          isDone={isDone}
        />
      </VerktygContainer>
    </>
  );
}

export default Skattningar;
