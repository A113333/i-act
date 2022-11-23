import * as React from "react";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { Box, Divider } from "@mui/material";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

function SocialProof() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const smallScreen = useMediaQuery("(min-width:385px)");

  const steps = [
    {
      label: "Alexander Frank, Kalmar",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
      ad minim veniam. `,
    },
    {
      label: "Alexander Nilsson, Kalmar",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
    {
      label: "Alexander Karl-Frank, Kalmar",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
      ad minim veniam.`,
    },
  ];

  const handleNext = () => {
    if (activeStep + 1 === steps.length) {
      setActiveStep(0);
      console.log("sets to zero");
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box
      sx={{
        width: "80%",
        margin: "auto",
        mt: 10,
        pt: 5,
        pb: 10,
      }}
    >
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontSize: "100px",
            color: "primary.main",
            fontFamily: "Roboto Serif",
            lineHeight: "80px",
          }}
        >
          "
        </Typography>

        <Box
          sx={{
            height: 150,
            maxWidth: 400,
            width: "100%",
            p: 2,
            margin: "auto",
            verticalAlign: "center",
          }}
        >
          <Typography sx={{ display: "flex", verticalAlign: "center" }}>
            {" "}
            {steps[activeStep].description}{" "}
          </Typography>
        </Box>

        <Paper
          square
          elevation={0}
          sx={{
            display: "flex",
            alignItems: "center",
            height: 50,
            pl: 2,
            textAlign: "center",
            justifyContent: "center",
            mt: smallScreen ? 0 : 8,
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              opacity: "50%",
            }}
          >
            {steps[activeStep].label}
          </Typography>
        </Paper>
      </Box>

      <MobileStepper
        variant="dots"
        steps={6}
        position="static"
        activeStep={activeStep}
        sx={{
          maxWidth: 800,
          flexGrow: 1,
          margin: "auto",
          mt: smallScreen ? 0 : 3,
          bgcolor: "transparent",
        }}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === 5}>
            {smallScreen ? "Nästa" : ""}
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            {smallScreen ? "Tillbaka" : ""}
          </Button>
        }
      />
    </Box>
  );
}

export default SocialProof;
