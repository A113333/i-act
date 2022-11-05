import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import ToolsContainer from "./SmattOchGott/ToolsContainer";
import ToolsAppBar from "./ToolsAppBar";
import useArray from "../hooks/useArray.js";
import VerktygKnapp from "./SmattOchGott/VerktygKnapp";
import { Box } from "@mui/system";

function Skattningar({ instruktioner, questionArr, startZero, scoring }) {
  const [page, setpage] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [anwserArr, setanwserArr] = useState([]);
  const [selectedValue, setselectedValue] = useState();

  const handleChange = (e) => {
    let anwser = {
      question: 1,
      anwser: e.target.value,
    };

    const updatedanwserArr = [...anwserArr];
    updatedanwserArr[page] = anwser;
    setanwserArr(updatedanwserArr);
    setselectedValue(e.target.value);

    setIsDone(true);

    console.log("selectedValue");
    console.log(typeof selectedValue);
  };

  useEffect(() => {
    // page + 1 === questionArr.length ? console.log("true") : console.log("false");

    setselectedValue();
  }, [page]);

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
          console.log("resultat " + item.name);
          scoreInName = item.name;
        } else console.log(item.name);
      });
    return scoreInName;
  };

  const getResults = () => {
    return sumResults.toString();
  };

  return (
    <>
      <ToolsAppBar step={page + 1} numberOfSteps={questionArr.length + 1} />
      <ToolsContainer>
        <Typography variant="h6" sx={{ opacity: "50%" }}>
          {/*  Kollar om man är på sista steget, och byter titel därefter */}
          {page !== questionArr.length
            ? instruktioner
            : "Här nedan kan du se ditt resultat"}
        </Typography>
        {/*  Kollar om man är på sista steget, och byter ut frågan mot "klart" om färdigt */}
        <Typography variant="h6" sx={{ pt: 2, pb: 2 }}>
          {" "}
          {page !== questionArr.length ? questionArr[page].question : "Klart"}
        </Typography>

        {page !== questionArr.length ? (
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
              onChange={handleChange}
            >
              {questionArr[page].svarsalternativ.map((item, index) => (
                <FormControlLabel
                  label={item}
                  key={index.toString()}
                  labelPlacement="start"
                  value={startZero ? index : index + 1}
                  checked={Number(selectedValue) === index}
                  sx={{
                    "& .MuiFormControlLabel-label": {
                      textAlign: "left",
                      width: "100%",
                    },
                  }}
                  control={
                    <Radio
                      key={(index + "a").toString()}
                      sx={{
                        "& .MuiSvgIcon-root": { fontSize: 28 },
                      }}
                      value={startZero ? index : index + 1}
                    />
                  }
                />
              ))}
            </RadioGroup>
          </FormControl>
        ) : (
          <>
            {" "}
            <Typography>
              {" "}
              Din total score blev: {sumResults} vilket indikerar{" "}
              {getScoreInName(sumResults)}
            </Typography>
            {scoring.map((item, index) => (
              <>
                <Box sx={{ width: "100%" }} kex={"b" + index}>
                  <Typography display="inline"> {item.name}: </Typography>
                  <Typography display="inline"> {item.score} </Typography>
                  <Typography display="inline"></Typography>
                </Box>
              </>
            ))}
          </>
        )}

        <VerktygKnapp
          page={page}
          setPage={setpage}
          lastPage={questionArr.length}
        />
      </ToolsContainer>
    </>
  );
}

export default Skattningar;
