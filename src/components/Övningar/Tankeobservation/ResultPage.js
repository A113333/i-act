import React, { useEffect } from "react";
import UpdatedShowOvningResults from "../UpdatedShowOvningResults";
import saveSomething from "../Saker/SmattOchGott/SaveSomething";

function ResultPage() {
  useEffect(() => {
    saveSomething("tankeobservation", saveObj);
  }, []);

  let saveObj = {
    titel: "Tankeobservation",
    id: crypto.randomUUID(),
    date: new Date().toLocaleDateString(),
    showOnResultAccordion: tanke,
    anwsers: [
      { question: question1, anwser: tanke },
      { question: question2, anwser: situation },
      {
        question: question3,
        anwser: feelings.map((item) => item.lable + ": " + item.value + "%"),
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
}

export default ResultPage;
