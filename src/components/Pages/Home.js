import React from "react";

import CssBaseline from "@mui/material/CssBaseline";
// import "././App.css";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import HeroSection from "../HeroSection";
import AppBar from "../AppBar";
import ThereBoxes from "../ThereBoxes";
import { Container } from "@mui/material";
import FreeTrial from "../FreeTrial";
import HowIactWorks from "../HowIactWorks";
import Faq from "../Faq";
import SocialProof from "../SocialProof";
import ContactUs from "../ContactUs";
import { BrowserRouter } from "react-router-dom";

function Home() {
  return (
    <>
      {" "}
      <CssBaseline />
      <AppBar />
      <Container>
        <HeroSection />
        <ThereBoxes />
        <FreeTrial />

        <HowIactWorks />

        <SocialProof />

        <Faq />

        <ContactUs />
      </Container>
    </>
  );
}

export default Home;
