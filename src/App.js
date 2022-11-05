import logo from "./logo.svg";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

import { BrowserRouter, Route, Routes, HashRouter } from "react-router-dom";
import Home from "./components/Pages/Home";
import UtmanaNAT from "./components/Pages/UtmanaNat";
import Verktyg from "./components/Pages/Verktyg";

import ViewNatsResults from "./components/QuestionNATs.js/ViewNatsResults";
import NotFound from "./components/Pages/NotFound";
import Skattningar from "./components/Saker/Skattningar";

const theme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#212529",
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: "#0066ff",
      main: "#247ba0",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#F8F9FA",
    },
    // Provide every color token (light, main, dark, and contrastText) when using
    // custom colors for props in Material UI's components.
    // Then you will be able to use it like this: `<Button color="custom">`
    // (For TypeScript, you need to add module augmentation for the `custom` value)
    customWhite: {
      light: "#3b424a",
      main: "#F8F9FA",
      dark: "#EBEBEB",
      contrastText: "#212529",
    },

    customBlack: {
      light: "#707d8b",
      main: "#212529",
      dark: "#070808",
      contrastText: "#F8F9FA",
    },

    customBlue: {
      light: "#707d8b",
      main: "#212529",
      dark: "#070808",
      contrastText: "#F8F9FA",
    },

    customGrey: {
      light: "#f8f9fa",
      main: "#e1e5ea",
      dark: "#657a8e",
      contrastText: "#F8F9FA",
    },
  },

  typography: {
    h1: {
      fontFamily: "Comfortaa",
      fontSize: "4.6rem",
    },
    h2: {
      fontFamily: "Comfortaa",
      fontSize: "3.6rem",
    },
    h3: {
      fontFamily: "Comfortaa",
      fontSize: "2.8rem",
    },
    h4: {
      fontFamily: "Comfortaa",
    },
    h5: {
      fontFamily: "Comfortaa",
    },
    h6: {
      fontFamily: "Comfortaa",
      fontSize: "1rem",
      fontWeight: "700",
    },

    body1: {
      fontFamily: "Comfortaa",
      fontWeight: 200,
      color: "#212529",
    },
    body1: {
      fontFamily: "Comfortaa",
      fontWeight: 200,
    },

    button: {
      fontFamily: "Comfortaa",
      fontWeight: "semibold",
      textTransform: "toLowerCase",
    },
  },
});

function App() {
  let skattning = {
    name: "GAD7",
    instruktioner:
      "Under de senaste 14 dagarna, hur ofta har du besvärats av följande problem",
    questionArr: [
      {
        question: "Känt dig nervös, ängslig eller väldigt stressad",
        svarsalternativ: [
          "Inte alls",
          "Flera dagar",
          "Mer än hälften av dagarna",
          "Nästan varje dag",
        ],
      },
      {
        question: "Inte kunnat sluta oroa dig eller kontrollera din oro",
        svarsalternativ: [
          "Inte alls",
          "Flera dagar",
          "Mer än hälften av dagarna",
          "Nästan varje dag",
        ],
      },
      {
        question: "Oroat dig för mycket för olika saker",
        svarsalternativ: [
          "Inte alls",
          "Flera dagar",
          "Mer än hälften av dagarna",
          "Nästan varje dag",
        ],
      },
    ],
    startZero: true,
    infoText:
      "Under de senaste 14 dagarna, hur ofta har du besvärats av följande problem",
    scoring: [{ mild: 5 }, { medel: 10 }, { allvarlig: 15 }],
  };
  return (
    <HashRouter>
      <div className="App">
        <ThemeProvider theme={theme}>
          <CssBaseline>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/verktyg" element={<Verktyg />} />

              <Route
                path="/verktyg/UtmanaNegativaAutomatiskaTankar/:sida"
                element={<UtmanaNAT />}
              />

              <Route
                path="/verktyg/UtmanaNegativaAutomatiskaTankar/visa"
                element={<ViewNatsResults />}
              />
              <Route
                path="/verktyg/skattningar"
                element={<Skattningar {...skattning} />}
              />

              <Route path="*" element={<NotFound />} />
              <Route />
            </Routes>
          </CssBaseline>
        </ThemeProvider>
      </div>
    </HashRouter>
  );
}

export default App;
