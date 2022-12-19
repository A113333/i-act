import { Box, Button, TextField, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useRef, useState } from "react";
import AppBarLandingPage from "../Navigation/AppBarLandingPage";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";

function KontaktaOss() {
  const [sentMail, setsentMail] = useState(false);
  const [mailError, setError] = useState(false);

  const form = useRef();
  const onClick = (e) => {
    console.log(form.current);
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2rokegp",
        "contact_form",
        form.current,
        "user_eLf3cCAUYb22sJaUSK2dS"
      )
      .then(
        (result) => {
          console.log(result.text);
          setsentMail(true);
        },
        (error) => {
          console.log(error.text);
          setError(true);
        }
      );
  };

  const TextFieldStyle = {
    width: "100%",
    mb: 5,
  };
  return (
    <>
      <AppBarLandingPage />
      <Container
        sx={{
          px: { xs: 0, sm: 5 },
          mx: { xs: 0, sm: "auto" },
          maxWidth: "500px",
          m: "auto",
        }}
      >
        <Box sx={{ maxWidth: "500px", m: "auto", mt: 10 }}>
          {sentMail ? (
            <>
              {" "}
              <Typography variant="h5"> Tack för ditt meddelande. </Typography>
              <Typography sx={{ pt: 1 }}>
                {" "}
                Vi återkommer så snart vi kan.
              </Typography>
              <Button
                sx={{ mt: 10 }}
                component={Link}
                to="/"
                variant="outlined"
              >
                {" "}
                Tillbaka till startsidan
              </Button>
            </>
          ) : (
            <form ref={form} onSubmit={onClick}>
              <TextField
                type="email"
                name="user_email"
                sx={TextFieldStyle}
                label="Din mailaddress"
              />
              <TextField
                sx={TextFieldStyle}
                multiline={true}
                rows={4}
                label="Ditt meddelande"
                name="message"
              />
              <Button type="submit" variant="outlined">
                Skicka
              </Button>
            </form>
          )}
        </Box>
      </Container>
    </>
  );
}

export default KontaktaOss;
