import React from "react";
import {
  Divider,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

function RadioButtonFromArray({
  setanwserArr,
  setselectedValue,
  selectedValue,
  setGotAnwser,
  questionArr,
  page,
  startZero,
  anwserArr,
}) {
  const handleChange = (e) => {
    let anwser = {
      question: Number(page),
      anwser: Number(e.target.name === "noScore" ? 0 : e.target.value),
    };
    console.log(e.target);
    const updatedanwserArr = [...anwserArr];

    updatedanwserArr[page] = anwser;
    setanwserArr(updatedanwserArr);
    setselectedValue(e.target.value);
    setGotAnwser(true);
  };

  return (
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        name={questionArr[page].noScore ? "noScore" : "score"}
        onChange={handleChange}
      >
        {questionArr[page].svarsalternativ.map((item, index) => (
          <>
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
                pt: 1,
                pb: 1,
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
            <Divider />
          </>
        ))}
      </RadioGroup>
    </FormControl>
  );
}

export default RadioButtonFromArray;
