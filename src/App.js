import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Route, Routes, HashRouter } from "react-router-dom";
import Home from "./components/Pages/Home";
import UtmanaNAT from "./components/Övningar/QuestionNATs.js/UtmanaNatMainPage";
import Verktyg from "./components/Pages/Verktyg";
import ShowAllNatResults from "./components/Övningar/QuestionNATs.js/ShowAllUtmanaNatResults";
import NotFound from "./components/Pages/NotFound";
import Skattningar from "./components/Skattningar/Skattningar";
import SkattningarResultat from "./components/Skattningar/SkattningarResultat";
import {
  GAD7,
  MADRAS,
  LSASSR,
  PHQ9,
} from "./components//Skattningar/SkattningarData";
import UserPage from "./components/Pages/UserPage";
import VerktygTest from "./components/Pages/VerktygTest";
import TextOvning from "./components/Övningar/TextOvningar/TextOvning";
import OvningVisaAllaResults from "./components/Övningar/OvningVisaAllaResults";
import KontaktaOss from "./components/Pages/KontaktaOss";
import Tester from "./components/Pages/Tester";
import PickValuesFromList from "./components/Övningar/Varderingar/PickValuesFromList";
import SkapaOvning from "./components/Övningar/SkapaEgen/SkapaOvning";
import TankeObservation from "./components/Övningar/Tankeobservation/TankeObservation";

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
      main: "#F8F9FA",
      // dark: will be calculated from palette.secondary.main,
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
      dark: "#e9edf2",
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
      fontSize: "1.15rem",
      fontWeight: "700",
      mt: 1,
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
  return (
    <HashRouter>
      <div className="App">
        <ThemeProvider theme={theme}>
          <CssBaseline>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/kontaktaoss" element={<KontaktaOss />} />
              <Route path="/verktyg" element={<Verktyg />} />
              <Route path="/verktygtest" element={<VerktygTest />} />
              <Route path="/anvandare" element={<UserPage />} />

              <Route
                path="/verktyg/ovning/skapaegen"
                element={<SkapaOvning />}
              />

              {/*  ROUTES FÖR NAT ÖVNING, LASMER OCH RESULTAT SAMANSTÄLLNING */}
              <Route
                path="/verktyg/UtmanaNegativaAutomatiskaTankar/:sida"
                element={<UtmanaNAT />}
              />
              <Route
                path="/verktyg/UtmanaNegativaAutomatiskaTankar/lasmer"
                element={<UtmanaNAT />}
              />
              <Route
                path="/verktyg/UtmanaNegativaAutomatiskaTankar/visa"
                element={<ShowAllNatResults />}
              />

              {/*  ROUTES FÖR text ÖVNING, LASMER OCH RESULTAT SAMANSTÄLLNING */}
              <Route
                path="/verktyg/ovning/:name/:page"
                element={<TextOvning />}
              />
              <Route
                path="/verktyg/ovning/resultat/:name"
                element={<OvningVisaAllaResults />}
              />

              {/*  ROUTES FÖR tankeobservation, LASMER OCH RESULTAT SAMANSTÄLLNING */}
              <Route
                path="/verktyg/ovning/tankeobservation"
                element={<TankeObservation />}
              />
              <Route
                path="/verktyg/ovning/resultat/:name"
                element={<OvningVisaAllaResults />}
              />

              <Route
                path="/ListaVardingersOrd"
                element={<PickValuesFromList />}
              />
              <Route
                path="/verktyg/ovning/resultat/:name"
                element={<OvningVisaAllaResults />}
              />

              {/* GAD/ resultat och fylla i */}
              <Route
                path="/verktyg/skattning/gad7"
                element={<Skattningar {...GAD7} />}
              />
              <Route
                path="/verktyg/skattning/gad7/resultat"
                element={
                  <SkattningarResultat
                    titel={"Dina skattningar för ångestsymptom"}
                    name={"GAD7"}
                    max={21}
                    label={"Ångestsymptom"}
                  />
                }
              />

              {/* phq9/ resultat och fylla i */}
              <Route
                path="/verktyg/skattning/PHQ9"
                element={<Skattningar {...PHQ9} />}
              />
              <Route
                path="/verktyg/skattning/PHQ9/resultat"
                element={
                  <SkattningarResultat
                    titel={"Dina skattningar för depressionsymptom"}
                    name={"PHQ-9"}
                    max={27}
                    label={"Depressionsymptom"}
                  />
                }
              />

              {/* LSAS-SR  resultat och fylla i */}
              <Route
                path="/verktyg/skattning/LSAS-SR"
                element={<Skattningar {...LSASSR} />}
              />
              <Route
                path="/verktyg/skattning/LSAS-SR/resultat"
                element={
                  <SkattningarResultat
                    titel={"Dina skattningar för social fobi"}
                    name={"LSAS-SR"}
                    max={144}
                    label={"Symptom på social ångest"}
                  />
                }
              />

              {/* Madras resultat och fylla i */}
              <Route
                path="/verktyg/skattning/madras-s"
                element={<Skattningar {...MADRAS} />}
              />
              <Route
                path="/verktyg/skattning/madras-s/resultat"
                element={
                  <SkattningarResultat
                    titel={"Dina skattningar för depressionssymptom"}
                    name={"MADRAS-S"}
                    max={54}
                    label={"Depressionssymptom"}
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
