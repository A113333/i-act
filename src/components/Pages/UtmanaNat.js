import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { Typography, Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import Step1 from "../QuestionNATs.js/Step1";
import Step2 from "../QuestionNATs.js/Step2";
import Step3 from "../QuestionNATs.js/Step3";
import Step4 from "../QuestionNATs.js/Step4";
import Step5 from "../QuestionNATs.js/Step5";
import Step6 from "../QuestionNATs.js/Step6";
import Step7 from "../QuestionNATs.js/Step7";
import Step8 from "../QuestionNATs.js/Step8";
import UtamanaNatResults from "../QuestionNATs.js/UtamanaNatResults";
import Stepper from "../Saker/Stepper";
// import useMediaQuery from "@mui/material/useMediaQuery";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import Step4Part2 from "../QuestionNATs.js/Step4Part2";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useCallback } from "react";

function UtmanaNat() {
  //const smallscreen = useMediaQuery("(min-width:600px)");
  const params = useParams();
  const { sida } = params;
  const sidaParams = Number(sida);

  const [page, setPage] = useState(0);
  const [isDone, setIsDone] = useState(false);
  console.log("pageParms");
  console.log(sidaParams);

  console.log("page");
  console.log(page);

  const Next = () => {
    navigate(
      `/verktyg/UtmanaNegativaAutomatiskaTankar/${(page + 1).toString()}`
    );
    setPage(sidaParams + 1);
    console.log(formData);

    setIsDone(false);
  };
  // #f8f9fa8c
  const onPopState = (event) => {
    console.log("on pop");
    console.log(page);
    setPage(sidaParams);
    console.log("on pop");
    console.log(sidaParams);
  };
  useEffect(() => {
    window.addEventListener("popstate", () => {
      onPopState();
    });
  }, []);

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

  let LocalUtmanaNatArray = localStorage.getItem("utmanaNat")
    ? JSON.parse(localStorage.getItem("utmanaNat"))
    : { utmanaNat: [] };

  const [formData, setFormData] = useState({
    tanke: "",
    troPaTanke: "",
    kanslorUnder: [],
    kanslorUnderIntensitet: [],
    selectedFeelings: new Set(),
    bevisForTanke: "",
    bevisMotTanke: "",
    tankeFallor: [],
    balanseradTanke: "",
    kanslorEfter: [],
    troPaTankeEfter: "",
    date: new Date().toLocaleDateString(),
  });

  /* 
  tanke: "testtanke",
  troPaTanke: 44,
  kanslorUnder: [],
  kanslorUnderIntensitet: [],
  selectedFeelings: new Set(),
  bevisForTanke: "",
  bevisMotTanke: "",
  tankeFallor: [],
  balanseradTanke: "",
  kanslorEfter: [],
  troPaTankeEfter: "",


{
    tanke: "Julia är vackrast i världen",
    troPaTanke: 76,
    selectedFeelings: new Set(),
    kanslorUnder: [],
    date: new Date(),
    kanslorUnderIntensitet: [
      {
        id: 39,
        value: 100,
        lable: "Lycklig",
      },
      {
        id: 41,
        value: 100,
        lable: "Kärleksfull",
      },
      {
        id: 43,
        value: 100,
        lable: "Upprymd",
      },
      {
        id: 47,
        value: 100,
        lable: "Intim",
      },
    ],
    selectedFeelings: new Set(),
    bevisForTanke: [
      "Hon har det finast håret",
      "Dom längsta mest välformade benen",
      'Läppar "to die for"',
      "Osv osv osv",
    ],
    bevisMotTanke: [
      "Tror inte jag kan komma på något",
      "Skulle kanske vara att hon är för snygg för att det ska vara autentiskt? Är hon opererad?",
      "Nej det tror jag verkligen inte så ta bort det beviset",
    ],
    tankeFallor: [
      {
        name: "Allt eller inget tänkande",
        desc: "Alla händelser delas in i ytterligheter, man har antingen lyckats eller misslyckats, man ser inte nyanser eller gråskalor.",
        exampel: "Om jag inte är perfekt så är jag misslyckad",
        id: "0",
      },
      {
        name: "Etikettering",
        desc: "Att döma och sätta etiketter på sig själv och andra människor.",
        exampel: "“Jag är en förlorare. De är idioter”",
        id: "5",
      },
    ],
    balanseradTanke:
      "Hon är den absolut finaste och vackraste människan jag träffat.",
    kanslorEfter: [
      {
        id: 39,
        value: 100,
        label: "Lycklig",
      },
      {
        id: 41,
        value: 100,
        label: "Kärleksfull",
      },
      {
        id: 43,
        value: 100,
        label: "Upprymd",
      },
      {
        id: 47,
        value: 100,
        label: "Intim",
      },
    ],
    troPaTankeEfter: 100,
  }


   */
  const navigate = useNavigate();

  const conditionalComponent = () => {
    switch (page) {
      case 0:
        return (
          <Step1
            formData={formData}
            setFormData={setFormData}
            setIsDone={setIsDone}
          />
        );
      case 1:
        return (
          <Step2
            formData={formData}
            setFormData={setFormData}
            setIsDone={setIsDone}
          />
        );
      case 2:
        return (
          <Step3
            formData={formData}
            setFormData={setFormData}
            setIsDone={setIsDone}
          />
        );
      case 3:
        return (
          <Step4
            formData={formData}
            setFormData={setFormData}
            setIsDone={setIsDone}
          />
        );

      case 4:
        return (
          <Step4Part2
            formData={formData}
            setFormData={setFormData}
            setIsDone={setIsDone}
          />
        );

      case 5:
        return (
          <Step5
            formData={formData}
            setFormData={setFormData}
            setIsDone={setIsDone}
          />
        );

      case 6:
        return (
          <Step6
            formData={formData}
            setFormData={setFormData}
            setIsDone={setIsDone}
          />
        );

      case 7:
        return (
          <Step7
            formData={formData}
            setFormData={setFormData}
            setIsDone={setIsDone}
          />
        );
      case 8:
        return (
          <Step8
            formData={formData}
            setFormData={setFormData}
            setIsDone={setIsDone}
          />
        );

      case 9:
        return (
          <UtamanaNatResults
            formData={formData}
            setFormData={setFormData}
            setIsDone={setIsDone}
          />
        );

      default:
        return (
          <Step1
            formData={formData}
            setFormData={setFormData}
            setIsDone={setIsDone}
          />
        );
    }
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#fefefe",
        }}
      >
        <Stepper numberOfSteps={10} step={page + 1} isDone={false} />
        <Box
          sx={{
            pt: 1,
            position: "sticky",
            top: 0,
            zIndex: 100,
            bgcolor: "white",
          }}
        >
          {/*  <Typography variant="h6" sx={{ textAlign: "center", color: "#247ba0" }}>
          {" "}
          Utmana dina tankar{" "}
        </Typography>
    */}

          <Stack alignItems="center" direction="row">
            {page === 9 || page === 0 ? (
              <IconButton
                aria-label="tillbaka"
                sx={{ opacity: "25%" }}
                disabled
              >
                <ArrowBackIcon color="primary" fontSize="small" />
              </IconButton>
            ) : (
              <IconButton aria-label="tillbaka" onClick={() => goBack()}>
                <ArrowBackIcon color="primary" fontSize="small" />
              </IconButton>
            )}

            <Typography
              sx={{
                minWidth: "30px",
                flex: 1,
                textAlign: "center",
                fontSize: "0.7rem",
              }}
            >
              {page === 9 ? "Bra jobbat!" : page + 1 + "/ 10"}
            </Typography>

            <IconButton aria-label="tillbaka" onClick={() => close()}>
              <Link to="/verktyg">
                <CloseIcon color="primary" fontSize="small" />
              </Link>
            </IconButton>
          </Stack>
        </Box>

        <Box
          sx={{
            backgroundColor: "#fefefe",
            px: { xs: 2, sm: 5 },
            pt: 7,
            borderRadius: 3,
            mt: 1,
            position: "relative",
            textAlign: "center",
            maxWidth: "1200px",
            m: "auto",
            minHeight: `calc(100vh - 65px)`,
          }}
        >
          <Box sx={{ pb: 3 }}>
            {page > 0 && page !== 9 ? (
              <Typography sx={{ fontSize: "0.8rem", fontStyle: "italic" }}>
                "{formData.tanke}"
              </Typography>
            ) : null}
            {conditionalComponent()}
            {page === 9 ? (
              <Button
                variant="contained"
                fullWidth
                component={Link}
                to="/verktyg"
                sx={{ position: "absolute", right: "0", bottom: "0" }}
              >
                Avsluta
              </Button>
            ) : (
              <Button
                variant="contained"
                disabled={!isDone}
                fullWidth
                onClick={() => Next()}
                sx={{ position: "absolute", right: "0", bottom: "0", mt: 5 }}
              >
                {" "}
                {page === 9 ? "Visa resultat" : "Nästa"}
              </Button>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default UtmanaNat;
