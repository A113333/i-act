import { Divider, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import IactAppbar from "../Navigation/IactAppBar.js";
import VerktygContainer from "../Verktyg/VerktygContainer.js";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import FlervalsDialog from "../Saker/SmattOchGott/FlervalsDialog.js";
import SettingsIcon from "@mui/icons-material/Settings";
import { Box } from "@mui/system";

function UserPage() {
  const ovningarArr = [
    "NAT",
    "Sork",
    "Sömndagbok",
    "Mindfulness",
    "Defusion",
    "Värderingar",
    "SMARTA mål",
  ];
  const skattningarArr = [
    "GAD7",
    "MADRAS-S",
    "Social fobi",
    "Ångest",
    "Depression",
  ];

  const [openSkattningDialog, setOpenSkattningDialog] = useState(false);
  const [openOvningarDialog, setOpenOvningarDialog] = useState(false);
  const [anvandareOvningar, setAnvandareOvningar] = useState([]);
  const [anvandareSkattningar, setAnvandareSkattningar] = useState([]);

  const handelAdd = () => {
    // setOpen(true);
  };
  return (
    <>
      <IactAppbar />
      <VerktygContainer>
        <Box sx={{ pt: { xs: 3, sm: 5 } }}>
          <Typography
            display="inline"
            variant="h6"
            sx={{
              opacity: "50%",
            }}
          >
            Dina övningar
          </Typography>
          <IconButton
            size="large"
            sx={{
              color: "primary.light",
              float: "right",
              pt: 1.5,
            }}
            onClick={() => setOpenOvningarDialog(true)}
          >
            <SettingsIcon />
          </IconButton>
          <Divider sx={{ mb: 1 }}></Divider>
        </Box>

        <Box sx={{ pt: 5 }}>
          <Typography variant="h6" display="inline" sx={{ opacity: "50%" }}>
            Dina skattningar
          </Typography>
          <IconButton
            size="large"
            sx={{
              color: "primary.light",
              float: "right",
              pt: 1.5,
            }}
            onClick={() => setOpenSkattningDialog(true)}
          >
            <SettingsIcon />
          </IconButton>
          <Divider sx={{ mb: 1 }}></Divider>
        </Box>
      </VerktygContainer>
      <Fab
        color="primary"
        aria-label="Lägg till"
        onClick={() => handelAdd()}
        sx={{ right: 20, position: "fixed", bottom: { xs: 75, sm: 30 } }}
      >
        <AddIcon />
      </Fab>
      <FlervalsDialog
        open={openOvningarDialog}
        setOpen={setOpenOvningarDialog}
        arr={ovningarArr}
        responseArr={anvandareOvningar}
        setResponse={setAnvandareOvningar}
        title="Lägg till övning(ar)"
      />
      <FlervalsDialog
        open={openSkattningDialog}
        setOpen={setOpenSkattningDialog}
        arr={skattningarArr}
        responseArr={anvandareSkattningar}
        setResponse={setAnvandareSkattningar}
        title="Lägg till skattning(ar)"
      />
    </>
  );
}

export default UserPage;
