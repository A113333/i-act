import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Route, Routes, HashRouter } from "react-router-dom";
import Home from "./components/Pages/Home";
import UtmanaNAT from "./components/Pages/UtmanaNat";
import Verktyg from "./components/Pages/Verktyg";
import ViewNatsResults from "./components/QuestionNATs.js/ViewNatsResults";
import NotFound from "./components/Pages/NotFound";
import Skattningar from "./components/Saker/Skattningar";
import { ScrollRestoration } from "react-router-dom";
import SkattningarResultat from "./components/SkattningarResultat";

const theme = createTheme({
  palette: {
    background: {
      default: "#f5f7f9",
    },
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
      light: "#444c54",
      main: "#32393f",
      dark: "#212529",
      contrastText: "#fdfdfd",
    },

    customBlue: {
      light: "#2b94c0",
      main: "#247ba0",
      dark: "#1d6280",
      contrastText: "#F8F9FA",
    },

    customGrey: {
      light: "#f8f9fa",
      main: "#f5f7f9",
      dark: "#dce3ea",
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
      fontSize: "2.0rem",
    },
    h5: {
      fontFamily: "Comfortaa",
      fontSize: "1.2rem",
    },
    h6: {
      fontFamily: "Comfortaa",
      fontSize: "1rem",
      fontWeight: "700",
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

      {
        question: "Haft svårt att slappna av",
        svarsalternativ: [
          "Inte alls",
          "Flera dagar",
          "Mer än hälften av dagarna",
          "Nästan varje dag",
        ],
      },

      {
        question: "Varit så rastlös att du har haft svårt att sitta still",
        svarsalternativ: [
          "Inte alls",
          "Flera dagar",
          "Mer än hälften av dagarna",
          "Nästan varje dag",
        ],
      },

      {
        question: "Blivit lätt irriterad eller retlig",
        svarsalternativ: [
          "Inte alls",
          "Flera dagar",
          "Mer än hälften av dagarna",
          "Nästan varje dag",
        ],
      },

      {
        question: "Känt dig rädd för att något hemskt skulle hända",
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
    scoring: [
      { name: "milda ångestproblem", score: 5 },
      { name: "medel ångestproblem", score: 10 },
      { name: "allvarliga ångestproblem", score: 15 },
    ],
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

              <Route
                path="/verktyg/skattning/gad7"
                element={<Skattningar {...skattning} />}
              />
              <Route
                path="/verktyg/skattning/gad7/resultat"
                element={
                  <SkattningarResultat
                    titel={"Dina skattningar för ångestsymptom"}
                    name={"GAD7"}
                  />
                }
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
