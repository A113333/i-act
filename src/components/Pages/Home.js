import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import HeroSection from "../Landingpage/HeroSection";
import AppBar from "../IactAppBar";
import ThereBoxes from "../Landingpage/ThereBoxes";
import { Container } from "@mui/material";
import FreeTrial from "../Landingpage/FreeTrial";
import HowIactWorks from "../Landingpage/HowIactWorks";
import Faq from "../Landingpage/Faq";
import SocialProof from "../Landingpage/SocialProof";
import AppBarLandingPage from "../Landingpage/AppBarLandingPage";

function Home() {
  return (
    <>
      {" "}
      <CssBaseline />
      <AppBarLandingPage />
      <HeroSection />
      <Container
        sx={{
          px: { xs: 0, sm: 5 },
          mx: { xs: 0, sm: "auto" },
          maxWidth: "1200px",
          m: "auto",
        }}
      >
        <ThereBoxes />

        <HowIactWorks />

        <SocialProof />

        <Faq />
      </Container>
    </>
  );
}

export default Home;
