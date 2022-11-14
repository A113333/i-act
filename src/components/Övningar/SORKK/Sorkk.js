import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import TextFieldOvning from "../../inputs/TextFieldOvning";
import VerktygContainer from "../../Saker/SmattOchGott/VerktygContainer";
import VerktygKnapp from "../../Saker/SmattOchGott/VerktygKnapp";
import VerktygAppbar from "../../Saker/VerktygAppBar";
import SorkkResults from "./SorkkResults";

function Sorkk() {
  const [page, setpage] = useState(0);
  const [gotAwnser, setgotAwnser] = useState(false);
  const [isResultsPage, setisResultsPage] = useState(false);
  const [sorkData, setsorkData] = useState({
    situation: "",
    organism: "",
    response: "",
    k1: "",
    k2: "",
    date: new Date().toLocaleDateString(),
  });

  const sorkArr = [
    { name: "situation", title: "Situation", desc: "Vad, när hur, med vem?" },
    {
      name: "organism",
      title: "Tankar, känslor och kroppsupplevelser",
      desc: "Vad känner och tänker du i situationen?",
      longDesc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      name: "response",
      title: "Respons",
      desc: "Hur reagerar du i situationen?",
      longDesc:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to.",
    },
    {
      name: "k1",
      title: "Kortsiktig konsekvens",
      desc: "Vad blir det omedelbara resultatet av ditt agerande?",
      longDesc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      name: "k2",
      title: "Långsiktig konsekvens",
      desc: "Hur påverkar ditt agerande dig på långsikt?",
    },
  ];

  let localSave = localStorage.getItem("SORKK")
    ? JSON.parse(localStorage.getItem("SORKK"))
    : [];

  let nrOfPages = 6;

  const onClickForward = () => {
    // om man clickar på knappen för "visa resultat", dvs på sista frågan
    if (page + 1 === nrOfPages) {
      setisResultsPage(true);
      // skapar ett svarsobject och sprarar det till localstorage
      let svar = [...sorkData];
      localSave.push(svar);
      localStorage.setItem("SORKK", JSON.stringify(localSave));
    }
    //   setselectedValue(); renasar radio buttons så ingen är förvald till nästa

    setpage(page + 1);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <VerktygAppbar step={page + 1} numberOfSteps={5} />
      <VerktygContainer>
        {sorkArr.map((item, index) => (
          <>
            <Box sx={{ display: index === page ? "contents" : "none" }}>
              <Typography variant="h6"> {item.desc} </Typography>
              <TextFieldOvning
                key={index.toString()}
                setValue={item.name}
                value={sorkData[item.name]}
                label={item.title}
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
        ))}

        {isResultsPage ? <SorkkResults formData={sorkData} /> : null}
        <VerktygKnapp
          page={page}
          setPage={setpage}
          onClickForward={onClickForward}
          lastPage={5}
          isDone={gotAwnser}
        />
      </VerktygContainer>
    </>
  );
}

export default Sorkk;
