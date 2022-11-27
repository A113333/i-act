import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import TextFieldOvning from "../../inputs/TextFieldOvning";
import VerktygContainer from "../../Verktyg/VerktygContainer";
import VerktygKnapp from "../../Buttons/VerktygKnapp";
import VerktygAppbar from "../../Navigation/VerktygAppBar";
import SorkkResults from "./SorkkResults";

function Sorkk() {
  const [page, setpage] = useState(0);
  const [gotAwnser, setgotAwnser] = useState(false);
  const [isResultsPage, setisResultsPage] = useState(false);
  const [sorkData, setsorkData] = useState({
    title: "",
    date: new Date().toLocaleDateString(),
    situation: "",
    organism: "",
    response: "",
    k1: "",
    k2: "",
  });

  const sorkArr = [
    {
      name: "situation",
      title: "Situation",
      question: "Vad, när hur, med vem?",
    },
    {
      name: "organism",
      title: "Tankar, känslor och kroppsupplevelser",
      question: "Vad känner och tänker du i situationen?",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      name: "response",
      title: "Respons",
      question: "Hur reagerar du i situationen?",
      desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to.",
    },
    {
      name: "k1",
      title: "Kortsiktig konsekvens",
      question: "Vad blir det omedelbara resultatet av ditt agerande?",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      name: "k2",
      title: "Långsiktig konsekvens",
      question: "Hur påverkar din reaktion dig på lång sikt?",
      desc: "Hur påverkar ditt agerande dig på långsikt?",
    },
  ];

  let localSave = localStorage.getItem("SORKK")
    ? JSON.parse(localStorage.getItem("SORKK"))
    : [];

  let nrOfPages = sorkArr.length + 1;

  const onClickForward = () => {
    // om man clickar på knappen för "visa resultat", dvs på sista frågan +3 för att set är asyncron, nrSteps är + 1 och page börjar på 0?
    if (page + 2 === nrOfPages) {
      console.log("reultpage");
      setisResultsPage(true);
      // skapar ett svarsobject och sprarar det till localstorage
      let svar = {
        // titlen behöver kunna sättas dynamiskt
        title: sorkData.situation,
        date: sorkData.date,
        anwsers: [],
      };
      sorkArr.forEach((item, index) => {
        svar.anwsers.push({
          question: item.question,
          anwser: sorkData[item.name],
        });
      });

      localSave.push(svar);
      console.log("svar");
      console.log(svar);
      localStorage.setItem("SORKK", JSON.stringify(localSave));
    }
    //   setselectedValue(); renasar radio buttons så ingen är förvald till nästa

    setpage(page + 1);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <VerktygAppbar
        step={page + 1}
        numberOfSteps={sorkArr.length}
        isResultsPage={isResultsPage}
      />
      <VerktygContainer>
        {isResultsPage ? (
          <SorkkResults formData={sorkData} questionArr={sorkArr} />
        ) : (
          sorkArr.map((item, index) => (
            <>
              <Box sx={{ display: index === page ? "contents" : "none" }}>
                <Typography variant="h6"> {item.question} </Typography>
                <TextFieldOvning
                  key={index.toString()}
                  setValue={item.name}
                  value={sorkData[item.name]}
                  label={item.title}
                  autoFocus
                  onChange={(e) => {
                    setgotAwnser(true);
                    setsorkData({
                      ...sorkData,
                      [item.name]: e.target.value,
                    });
                    setgotAwnser(true);
                  }}
                  setState={setsorkData}
                  state={sorkData}
                  isMultiLine={true}
                />
                <Typography sx={{ fontSize: "0.8rem" }}>
                  {item.longDesc}
                </Typography>
              </Box>
            </>
          ))
        )}

        <VerktygKnapp
          page={page}
          setPage={setpage}
          onClickForward={onClickForward}
          lastPage={sorkArr.length}
          isDone={gotAwnser}
          isResultsPage={isResultsPage}
        />
      </VerktygContainer>
    </>
  );
}

export default Sorkk;
