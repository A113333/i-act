import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";

import VerktygAppbar from "../Navigation/VerktygAppBar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import useTheme from "@mui/material/styles/useTheme";
import VerktygKnapp from "../Buttons/VerktygKnapp";
import ToolsContaioner from "../Verktyg/VerktygContainer";
import values from "../Data/values";
import MultiChoiceFromArray from "../inputs/MultiChoiceFromArray";

function Tester() {
  const valuesArr = values;
  //const smallscreen = useMediaQuery("(min-width:600px)");
  const params = useParams();
  const { sida } = params;
  const sidaParams = Number(sida);
  const theme = useTheme();

  const [page, setPage] = useState(0);
  const [isDone, setIsDone] = useState(false);

  const next = () => {
    console.log("next");
  };

  const exsit = () => {};

  const goBack = () => {
    setPage(page - 1);
    console.log("tillbaka");
    console.log(formData);
  };

  const close = () => {
    console.log("stänger");
  };

  useEffect(() => {
    const { sida } = params;
    const sidaParams = Number(sida);
    setPage(sidaParams);
  }, [page]);

  /*   let LocalUtmanaNatArray = localStorage.getItem("utmanaNat")
    ? JSON.parse(localStorage.getItem("utmanaNat"))
    : { utmanaNat: [] }; */

  const [formData, setFormData] = useState({
    title: "lalal",
  });

  console.log(formData);

  const formDataSetter = (data) => {
    setFormData({
      ...formData,
      values: data,
    });
  };

  return (
    <>
      <VerktygAppbar step={1} numberOfSteps={2} />
      <ToolsContaioner>
        <MultiChoiceFromArray
          dataArr={valuesArr}
          formData={formData}
          setFormData={formDataSetter}
        />
        <Box sx={{ pb: 3 }}>
          <VerktygKnapp
            page={page}
            setPage={setPage}
            lastPage={9}
            isDone={isDone}
            onClickForward={next}
            isResultsPage={page + 1 === 10}
          />
        </Box>
      </ToolsContaioner>
    </>
  );
}

export default Tester;
