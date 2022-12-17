import { Box, Typography, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import VerktygAppbar from "../../Navigation/VerktygAppBar";
import VerktygContainer from "../../Verktyg/VerktygContainer";
import EditRoundedIcon from "@mui/icons-material/EditRounded";

function SkapaOvning({ value, label, onChange, isMultiLine }) {
  const [page, setpage] = useState(1);
  const [questionArr, setquestionArr] = useState([]);
  const [ovningName, setovningName] = useState("Min övning");
  const [question, setquestion] = useState("");
  const [questionLabel, setquestionLabel] = useState("");
  const [helpText, sethelpText] = useState("");

  const handelChangeQuestion = (e) => {
    setquestion(e.target.value);
  };
  const handelChangeQuestionLabel = (e) => {
    setquestionLabel(e.target.value);
  };

  const handelChangeHelpText = (e) => {
    sethelpText(e.target.value);
  };

  const addPage = () => {
    setpage(page + 1);
    let questionObj = {
      question: question,
      title: questionLabel,
      helpText: helpText,
      name: "question" + page.toString(),
    };
    setquestionArr((oldArray) => [...oldArray, questionObj]);

    console.log(questionArr, "questionArr");
  };

  const saveOvning = () => {
    let minOvning = {
      anwserObject: {},
      questions: [...questionArr],
    };
    questionArr.forEach((item, index) => {
      console.log("runs");
      minOvning.anwserObject[item.name] = "";
    });

    console.log(minOvning);
  };
  return (
    <>
      <VerktygAppbar step={page} numberOfSteps={questionArr.length + 1} />
      <VerktygContainer>
        <Box sx={{ mb: 5 }}>
          <Box sx={{ mb: 2 }} onClick={() => console.log("klickad")}>
            <TextField
              fullWidth
              value={question}
              onChange={(e) => handelChangeQuestion(e)}
              label="Skriv in frågan här"
              autoFocus
              sx={{ mb: 2 }}
            ></TextField>
          </Box>
          <TextField
            multiline={true}
            rows={4}
            variant="outlined"
            id="Fråga 1"
            label={"Skriv in etiketten för frågan här"}
            value={questionLabel}
            sx={{ width: "100%", m: "auto" }}
            autoComplete="off"
            onChange={(e) => handelChangeQuestionLabel(e)}
          />
          <Box sx={{ mb: 2, mt: 2, opacity: "75%" }}>
            <TextField
              fullWidth
              multiline={true}
              rows={2}
              value={helpText}
              onChange={(e) => handelChangeHelpText(e)}
              label="Här lägger du till exempel eller en mer utförlig
              beskrivning av frågan"
              sx={{ mb: 2 }}
            ></TextField>
          </Box>
        </Box>

        <Button
          variant="contained"
          onClick={() => addPage()}
          sx={{ float: "right" }}
        >
          Lägg till en fråga
        </Button>

        <Button
          variant="contained"
          onClick={() => saveOvning()}
          sx={{ float: "right", mr: 2 }}
        >
          Spara och avsluta
        </Button>
      </VerktygContainer>
    </>
  );
}

export default SkapaOvning;
