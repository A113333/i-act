import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import ToolsAppBar from "../Navigation/VerktygAppBar";
import VerktygKnapp from "../Buttons/VerktygKnapp";
import VerktygContainer from "../Verktyg/VerktygContainer";
import { Link } from "react-router-dom";
import RadioButtonFromArray from "../inputs/RadioButtonFromArray";
import BackToVerktygButton from "../Buttons/BackToVerktygButton";

function Skattningar({
  instruktioner,
  questionArr,
  startZero,
  scoring,
  name,
  maxScore,
}) {
  const [page, setPage] = useState(0);
  const [gotAwnser, setgotAnwser] = useState(false);
  const [anwserArr, setanwserArr] = useState([]);
  const [selectedValue, setselectedValue] = useState();
  const [isLastPage, setisLastPage] = useState(false);

  const nrOfPages = questionArr.length;
  let localSave = localStorage.getItem(name)
    ? JSON.parse(localStorage.getItem(name))
    : [];

  // console.log(questionArr);

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
        id: crypto.randomUUID(),
      };
      localSave.push(item);
      localStorage.setItem(name, JSON.stringify(localSave));
    }
    //   setselectedValue(); renasar radio buttons så ingen är förvald till nästa
    setselectedValue();
    setPage(page + 1);
    window.scrollTo(0, 0);
    setgotAnwser(false);
  };

  let sumResults = anwserArr.reduce(function (prev, current) {
    return prev + +Number(current.anwser);
  }, 0);

  const getScoreInName = (score) => {
    let scoreInName;
    console.log(score, ".score");
    scoring.forEach((item, index) => {
      console.log(item.score, "item.score");

      if (score === 0) {
        scoreInName = scoring[0].name;
      }

      if (item.score <= score) {
        console.log(item.score, "item.score");
        scoreInName = item.name;
      } else console.log("hittade inte ditt resultat!");
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
        <Box sx={{ m: "auto", textAlign: "center" }}>
          {" "}
          {page !== nrOfPages ? (
            <Typography variant="h6">Fråga {page + 1}</Typography>
          ) : null}
          <Typography
            variant="body1"
            sx={{ opacity: "75%", fontSize: "0.8rem", pt: 1 }}
          >
            {/*  Kollar om man är på sista steget, och byter titel därefter */}
            {page !== questionArr.length ? instruktioner : "Ditt resultat blev"}
          </Typography>
          {/*  Kollar om man är på sista steget, och byter ut frågan mot "klart" om färdigt */}
          <Typography variant="body1" sx={{ pt: 2, pb: 2 }}>
            {page !== questionArr.length ? questionArr[page].question : ""}
          </Typography>
          {/* om vi inte är på sista sida: visa svarsalternativ, annars visa resultat */}
          {page !== questionArr.length ? (
            <Box sx={{ pt: 1 }}>
              <RadioButtonFromArray
                setanwserArr={setanwserArr}
                setselectedValue={setselectedValue}
                setGotAnwser={setgotAnwser}
                questionArr={questionArr}
                page={page}
                startZero={startZero}
                anwserArr={anwserArr}
                selectedValue={selectedValue}
              />
            </Box>
          ) : (
            <>
              {/* Det som visas om man är på resultatsidan */}
              <Typography variant="h5">
                {sumResults} av {maxScore}
              </Typography>
              <Typography>
                Det verkar som att {getScoreInName(sumResults)}
              </Typography>
              <Typography sx={{ pt: 10 }}>
                Vill du se hur ditt mående har förändrats över tid?
              </Typography>
              <Button component={Link} to="resultat" variant="outlined">
                Klicka här
              </Button>

              <Box>
                <Typography sx={{ pt: 10 }}>
                  Eller återvänd till din sida
                </Typography>
                <BackToVerktygButton />
              </Box>
            </>
          )}
          <VerktygKnapp
            page={page}
            setPage={setPage}
            onClickForward={onClickForward}
            lastPage={isLastPage}
            isDone={gotAwnser}
          />
        </Box>
      </VerktygContainer>
    </>
  );
}
export default Skattningar;
