import logo from "./logo.svg";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import HeroSection from "./components/HeroSection";
import AppBar from "./components/AppBar";
import ThereBoxes from "./components/ThereBoxes";
import { Container } from "@mui/material";
import FreeTrial from "./components/FreeTrial";
import HowIactWorks from "./components/HowIactWorks";
import Faq from "./components/Faq";
import SocialProof from "./components/SocialProof";
import ContactUs from "./components/ContactUs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home";
import UtmanaNAT from "./components/Pages/UtmanaNat";
import Verktyg from "./components/Pages/Verktyg";

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
    },

    body1: {
      fontFamily: "Comfortaa",
      fontWeight: 200,
      color: "#212529",
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
    <BrowserRouter>
      <div className="App">
        <ThemeProvider theme={theme}>
          <CssBaseline>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/verktyg" element={<Verktyg />} />
              <Route
                path="/verktyg/UtmanaNegativaAutomatiskaTankar"
                element={<UtmanaNAT />}
              />
              <Route />
            </Routes>
          </CssBaseline>
        </ThemeProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
