import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import TextFieldOvning from "../../inputs/TextFieldOvning";
import VerktygContainer from "../../Verktyg/VerktygContainer";
import VerktygKnapp from "../../Buttons/VerktygKnapp";
import VerktygAppbar from "../../Navigation/VerktygAppBar";
import OvningShowResults from "../OvningShowResult";
import { useParams } from "react-router-dom";
import TextOvningarData from "../../Data/TextOvningarData";
import { useNavigate, useLocation } from "react-router-dom";
import StartFeelingsButton from "../../Buttons/StartFeelingsButton";

function TextOvning(props) {
  const params = useParams();
  const ovningName = params.name;
  const pageParam = Number(params.page);

  const location = useLocation();
  console.log(location);

  const isTest = location.state ? location.state.isTest : false;
  console.log(isTest, "istest");

  const [page, setpage] = useState(pageParam);
  const [gotAwnser, setgotAwnser] = useState(isTest);
  const [isResultsPage, setisResultsPage] = useState(false);
  const [formData, setFormData] = useState(
    TextOvningarData[ovningName].anwserObject
  );

  const navigate = useNavigate();

  /*   title: "",
  date: new Date().toLocaleDateString(),
  situation: "",
  organism: "",
  response: "",
  k1: "",
  k2: "", */

  // Arrayen från ovning data som innehåller alla frågor
  const ovningArr = TextOvningarData[ovningName].questions;

  let localSave = localStorage.getItem(ovningName)
    ? JSON.parse(localStorage.getItem(ovningName))
    : [];

  console.log("formData");
  console.log(formData);

  let nrOfPages = ovningArr.length + 1;

  const onClickForward = () => {
    setgotAwnser(isTest ? true : false);
    // om man clickar på knappen för "visa resultat", dvs på sista frågan +3 för att set är asyncron, nrSteps är + 1 och page börjar på 0?
    if (page + 2 === nrOfPages) {
      console.log("reultpage");
      setisResultsPage(true);
      // skapar ett svarsobject och sprarar det till localstorage
      let svar = {
        // titlen behöver kunna sättas dynamiskt
        date: formData.date,
        id: formData.id,
        anwsers: [],
      };
      ovningArr.forEach((item, index) => {
        svar.anwsers.push({
          question: item.question,
          anwser: formData[item.name],
        });
      });

      localSave.push(svar);
      console.log("svar");
      console.log(svar);
      localStorage.setItem(ovningName, JSON.stringify(localSave));
    }
    //   setselectedValue(); renasar radio buttons så ingen är förvald till nästa

    navigate(`/verktyg/ovning/${ovningName}/${(page + 1).toString()}`);
    setpage(page + 1);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    setpage(pageParam);
  }, [page]);
  console.log(ovningArr);

  return (
    <>
      <VerktygAppbar
        step={page + 1}
        numberOfSteps={ovningArr.length}
        isResultsPage={isResultsPage}
      />
      <VerktygContainer>
        {isResultsPage ? (
          <OvningShowResults formData={formData} questionArr={ovningArr} />
        ) : (
          ovningArr.map((item, index) => (
            <>
              <Box
                key={index}
                sx={{ display: index === page ? "contents" : "none" }}
              >
                <Typography variant="h6"> {item.question} </Typography>
                <TextFieldOvning
                  key={index.toString()}
                  setValue={item.name}
                  value={formData[item.name]}
                  label={item.title}
                  autoFocus
                  onChange={(e) => {
                    setgotAwnser(true);
                    setFormData({
                      ...formData,
                      [item.name]: e.target.value,
                    });
                  }}
                  setState={setFormData}
                  state={formData}
                  isMultiLine={true}
                />
                {item.type === "feelings" ? <StartFeelingsButton /> : null}
                <Typography sx={{ fontSize: "0.8rem" }}>{item.desc}</Typography>
              </Box>
            </>
          ))
        )}

        <VerktygKnapp
          page={page}
          setPage={setpage}
          onClickForward={onClickForward}
          lastPage={ovningArr.length}
          isDone={gotAwnser}
          isResultsPage={isResultsPage}
        />
      </VerktygContainer>
    </>
  );
}

export default TextOvning;
