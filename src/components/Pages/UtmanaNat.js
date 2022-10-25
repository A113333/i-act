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

function UtmanaNat() {
  //const smallscreen = useMediaQuery("(min-width:600px)");
  const [page, setPage] = useState(0);
  const [isDone, setIsDone] = useState(false);

  const [formData, setFormData] = useState({
    tanke: "",
    troPaTanke: "",
    kanslorUnder: [],
    kanslorUnderIntensitet: [],
    bevisForTanke: "",
    bevisMotTanke: "",
    tankeFallor: [],
    balanseradTanke: "",
    kanslorEfter: [],
    troPaTankeEfter: "",
  });

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
          <Step5
            formData={formData}
            setFormData={setFormData}
            setIsDone={setIsDone}
          />
        );

      case 5:
        return (
          <Step6
            formData={formData}
            setFormData={setFormData}
            setIsDone={setIsDone}
          />
        );

      case 6:
        return (
          <Step7
            formData={formData}
            setFormData={setFormData}
            setIsDone={setIsDone}
          />
        );
      case 7:
        return (
          <Step8
            formData={formData}
            setFormData={setFormData}
            setIsDone={setIsDone}
          />
        );

      case 8:
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

  const goToNext = () => {
    console.log(formData);
    setPage(page + 1);
    setIsDone(false);
  };

  const exsit = () => {};

  const goBack = () => {
    setPage(page - 1);
    console.log("tillbaka");
  };

  const close = () => {
    console.log("stänger");
  };

  return (
    <>
      <Stepper numberOfSteps={7} step={page + 1} isDone={false} />

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
          {page > 0 ? (
            <IconButton aria-label="tillbaka" onClick={() => goBack()}>
              <ArrowBackIcon color="primary" fontSize="small" />
            </IconButton>
          ) : (
            <IconButton aria-label="tillbaka" sx={{ opacity: "50%" }} disabled>
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
            {page === 8 ? "Bra jobbat!" : page + 1 + "/ 8"}
          </Typography>

          <IconButton aria-label="tillbaka" onClick={() => close()}>
            <CloseIcon color="primary" fontSize="small" />
          </IconButton>
        </Stack>
      </Box>

      <Box
        sx={{
          backgroundColor: "#f7f7f7",
          mt: 0,
          p: 2,
          pt: 1,
        }}
      >
        <Box
          sx={{
            backgroundColor: "#f7f7f7",

            padding: 1,
            borderRadius: 3,
            mt: 1,
            position: "relative",
            textAlign: "center",
            minHeight: "85vh",
          }}
        >
          <Box sx={{ pt: 1, pb: 7 }}>
            {page > 0 && page != 8 ? (
              <Typography sx={{ fontSize: "0.8rem" }}>
                {" "}
                " {formData.tanke} "
              </Typography>
            ) : null}
            {conditionalComponent()}

            {page === 8 ? (
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
                onClick={() => goToNext()}
                sx={{ position: "absolute", right: "0", bottom: "0" }}
              >
                {" "}
                {page === 7 ? "Visa resultat" : "Nästa"}
              </Button>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default UtmanaNat;
