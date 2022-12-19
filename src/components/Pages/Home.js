import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import HeroSection from "../Landingpage/HeroSection";
import ThereBoxes from "../Landingpage/TwoBoxes";
import { Box, Container, Divider } from "@mui/material";
import HowIactWorks from "../Landingpage/HowIactWorks";
import Faq from "../Landingpage/Faq";
import SocialProof from "../Landingpage/SocialProof";
import AppBarLandingPage from "../Navigation/AppBarLandingPage";

function Home() {
  return (
    <>
      {" "}
      <CssBaseline />
      <AppBarLandingPage />
      <Container
        sx={{
          px: { xs: 0, sm: 5 },
          mx: { xs: 0, sm: "auto" },
          maxWidth: "1200px",
          m: "auto",
        }}
      >
        <HeroSection />
        <ThereBoxes />

        <HowIactWorks />
        <Box
          sx={{
            backgroundColor: "#ffffff",
            borderRadius: "18px",
            pb: 1,
            mb: 5,
          }}
        >
          <SocialProof />
          <Divider />
          <Faq />
        </Box>
      </Container>
    </>
  );
}

export default Home;
