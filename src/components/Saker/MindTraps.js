import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Box } from "@mui/system";
import useTheme from "@mui/material/styles/useTheme";
import Grid from "@mui/material/Grid";

function MindTraps({ formData, setFormData, setIsDone }) {
  const mindTrapsArray = [
    {
      name: "Allt eller inget tänkande",
      desc: "Alla händelser delas in i ytterligheter, man har antingen lyckats eller misslyckats, man ser inte nyanser eller gråskalor.",
      exampel: "Om jag inte är perfekt så är jag misslyckad",
      id: "0",
    },
    {
      name: "Mentalt filter (Selektiv abstraktion)",
      desc: "När man endast uppmärksammar vissa typer av bevis, man ser endast en neagtiv detalj istället för att se till helheten.",
      exampel: "Att enbart se sina misslyckande men inte sina framgångar",
      id: "1",
    },
    {
      name: "Tankeläsning",
      desc: "När man föreställer sig att man vet eller drar förhastade slutsatser om vad andra tänker.",
      exampel: "”De säger ingenting, men jag förstår ju vad de tänker om mig.”",
      id: "2",
    },
    {
      name: "Siarens misstag",
      desc: "Du siar om framtiden och är helt säker på att saker kommer gå dåligt. Du förutsätter att det värsta kommer hända.",
      exampel: "“Alla på festen kommer tycka jag är tråkig”",
      id: "3",
    },
    {
      name: "Emotionellt tänkande",
      desc: "När man utgår från att bara för att man känner på ett visst sätt så måste det man tänker vara sant",
      exampel: "“Jag känner mig dum alltså är jag det”",
      id: "4",
    },
    {
      name: "Etikettering",
      desc: "Att döma och sätta etiketter på sig själv och andra människor.",
      exampel: "“Jag är en förlorare. De är idioter”",
      id: "5",
    },
    {
      name: "Övergeneralisering",
      desc: "När man tycker sig se ett mönster baserat på en enstaka händelse eller drar förhastade slutsatser över saker som har hänt. ",
      exampel: "“Allting är alltid dåligt. Det händer aldrig något bra.”",
      id: "6",
    },
    {
      name: "Diskvalificering",
      desc: "När man av någon anledning räknar bort alla positiva saker som har hänt eller som man har gjort.",
      exampel:
        "“Om jag lyckas bra med något så är det en lyckoträff, inte jag som gjort något bra.”",
      id: "7",
    },
    {
      name: "Förstoring",
      desc: "Då man förstorar upp saker utom rimliga proportioner.",
      exampel:
        "“Jag gör ett misstag på jobbet och är därmed övertygad om att jag kommer bli avskedad.”",
      id: "8",
    },
    {
      name: "Borden/Måsten (Pliktpåståenden)",
      desc: "När man har en bestämd uppfattning om hur man själv eller andra ska bete sig. Du ställer krav och belastar dig med “måsten”, “borden”, “alltid”, “aldrig”, “ska osv.",
      exampel: "“Man ska alltid vara andra till lags”",
      id: "9",
    },
    {
      name: "Personalisering",
      desc: "När man klandrar sig själv eller tar ansvar för något som inte var ens fel eller skyller på andra för saker som man själv gjort fel. ",
      exampel:
        "“Den andra personen blir tyst under ett samtal, det betyder säkert att hen tycker vårt samtal är tråkigt.”",
      id: "10",
    },
  ];
  const [selected, setSelected] = React.useState(new Set());
  const userMindTraps = [];

  useEffect(() => {
    console.log(selected.size);

    selected.forEach((item, index) => {
      console.log("utem");
      console.log(item);
      if (item === 0) {
        userMindTraps.push(mindTrapsArray[item]);
      }
      if (item) {
        userMindTraps.push(mindTrapsArray[item]);
      }
    });
    console.log("userMindTraps");
    console.log(userMindTraps);
    setFormData({
      ...formData,
      tankeFallor: userMindTraps,
    });
    console.log("fromData");
    console.log(formData);
  }, [selected]);

  function handleSelectionChanged(id) {
    // treat state as immutable
    // React only does a shallow comparison so we need a new Set
    const newSet = new Set(selected);
    if (newSet.has(id)) newSet.delete(id);
    else newSet.add(id);
    setSelected(newSet);
  }
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          textAlign: "left",
          width: "100%",
        }}
      >
        <Grid container justifyContent="center">
          {mindTrapsArray.map((data) => {
            return (
              <Card
                raised={false}
                // class={selected.has(data.id) ? "contained" : "outlined"}
                sx={{
                  width: { xs: "100%", sm: "48%" },
                  mb: 2,
                  mr: 2,
                  backgroundColor: selected.has(data.id)
                    ? theme.palette.primary.main
                    : theme.palette.customWhite.main,

                  color: selected.has(data.id)
                    ? theme.palette.customWhite.main
                    : theme.palette.primary.main,
                }}
                id={`custom-card-${data.id}`}
              >
                <CardActionArea
                  onClick={() => {
                    handleSelectionChanged(data.id);
                  }}
                >
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      sx={{ fontWeight: 600, fontSize: "0.9rem" }}
                    >
                      {data.name}
                    </Typography>
                    <Typography variant="body2" sx={{ fontSize: "0.7rem" }}>
                      {data.desc}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            );
          })}
        </Grid>
      </Box>
    </>
  );
}

export default MindTraps;
