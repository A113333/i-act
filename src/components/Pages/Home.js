import React from "react";

import CssBaseline from "@mui/material/CssBaseline";
import HeroSection from "../Landingpage/HeroSection";
import AppBar from "../AppBar";
import ThereBoxes from "../Landingpage/ThereBoxes";
import { Container } from "@mui/material";
import FreeTrial from "../Landingpage/FreeTrial";
import HowIactWorks from "../Landingpage/HowIactWorks";
import Faq from "../Landingpage/Faq";
import SocialProof from "../Landingpage/SocialProof";

function Home() {
  return (
    <>
      {" "}
      <CssBaseline />
      <AppBar />
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
        <FreeTrial />

        <HowIactWorks />

        <SocialProof />

        <Faq />
      </Container>
    </>
  );
}

export default Home;
