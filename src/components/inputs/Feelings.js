import React, { useState, useEffect } from "react";
import { Box, Tab, Tabs, Chip, Typography } from "@mui/material";
import useTheme from "@mui/material/styles/useTheme";

// set is done = function för att göra knapp vidare möjlig
//set FormData: setter funktion där valda känslor
function Feelings({ setIsDone, setFormData, formData, feelings }) {
  const mql = window.matchMedia("(max-width: 550px)");
  const toSmall = window.matchMedia("(max-width: 335px)");
  const toSmallForThree = toSmall.matches;
  const smallScreen = mql.matches;
  const theme = useTheme();

  const allFeelings = [
    { name: "Kritisk", id: 0, type: "ilska" },
    { name: "Förödmjukad", id: 1, type: "ilska" },
    { name: "Ursinnig", id: 2, type: "ilska" },
    { name: "Bitter", id: 3, type: "ilska" },
    { name: "Aggressiv", id: 4, type: "ilska" },
    { name: "Frustrerad", id: 5, type: "ilska" },
    { name: "Skeptisk", id: 6, type: "ilska" },
    { name: "Avundsjuk", id: 7, type: "ilska" },
    { name: "Arg", id: 8, type: "ilska" },
    { name: "Kränkt", id: 9, type: "ilska" },
    { name: "Provocerad", id: 10, type: "ilska" },
    { name: "Irriterad", id: 11, type: "ilska" },

    { name: "Ogillande", id: 12, type: "avsky" },
    { name: "Besviken", id: 13, type: "avsky" },
    { name: "Förfärad", id: 14, type: "avsky" },
    { name: "Avståndstagande", id: 15, type: "avsky" },
    { name: "Avsmak", id: 16, type: "avsky" },
    { name: "Motbjudande", id: 17, type: "avsky" },
    { name: "Dömande", id: 18, type: "avsky" },
    { name: "Upprörd", id: 19, type: "avsky" },
    { name: "Äcklad", id: 20, type: "avsky" },
    { name: "Tveksam", id: 21, type: "avsky" },
    { name: "Motvilja", id: 22, type: "avsky" },
    { name: "Avskyvärt", id: 23, type: "avsky" },

    { name: "Chock", id: 24, type: "rädsla" },
    { name: "Hotad", id: 25, type: "rädsla" },
    { name: "Skräckslagen", id: 26, type: "rädsla" },
    { name: "Undergiven", id: 27, type: "rädsla" },
    { name: "Osäker", id: 28, type: "rädsla" },
    { name: "Orolig", id: 29, type: "rädsla" },
    { name: "Överväldigad", id: 30, type: "rädsla" },
    { name: "Underlägsen", id: 31, type: "rädsla" },
    { name: "Värdelös", id: 32, type: "rädsla" },
    { name: "Paralyserad", id: 33, type: "rädsla" },
    { name: "Skrämd", id: 34, type: "rädsla" },
    { name: "Nervös", id: 35, type: "rädsla" },

    { name: "Intresserad", id: 36, type: "glädje" },
    { name: "Euforisk", id: 37, type: "glädje" },
    { name: "Accepterad", id: 38, type: "glädje" },
    { name: "Lycklig", id: 39, type: "glädje" },
    { name: "Optimistisk", id: 40, type: "glädje" },
    { name: "Kärleksfull", id: 41, type: "glädje" },
    { name: "Frågvis", id: 42, type: "glädje" },
    { name: "Upprymd", id: 43, type: "glädje" },
    { name: "Respekterad", id: 44, type: "glädje" },
    { name: "Gladlynt", id: 45, type: "glädje" },
    { name: "Inspirerad", id: 46, type: "glädje" },
    { name: "Intim", id: 47, type: "glädje" },

    { name: "Sårbar", id: 48, type: "sorg" },
    { name: "Förtvivlad", id: 49, type: "sorg" },
    { name: "Nedstämd", id: 50, type: "sorg" },
    { name: "Olycklig", id: 51, type: "sorg" },
    { name: "Ensam", id: 52, type: "sorg" },
    { name: "Bedrövad", id: 53, type: "sorg" },
    { name: "Sårad", id: 54, type: "sorg" },
    { name: "Försummad", id: 55, type: "sorg" },
    { name: "Nedslagen", id: 56, type: "sorg" },
    { name: "Tom", id: 57, type: "sorg" },
    { name: "Maktlös", id: 58, type: "sorg" },
    { name: "Skör", id: 59, type: "sorg" },

    { name: "Ånger", id: 60, type: "skam" },
    { name: "Blyg", id: 61, type: "skam" },
    { name: "Skyldig", id: 62, type: "skam" },
    { name: "Oduglig", id: 63, type: "skam" },
    { name: "Avvisad", id: 64, type: "skam" },
    { name: "Besviken", id: 65, type: "skam" },
    { name: "Dåligt samvete", id: 66, type: "skam" },
    { name: "Undfallande", id: 67, type: "skam" },
    { name: "Generad", id: 68, type: "skam" },
    { name: "Misslyckad", id: 69, type: "skam" },
    { name: "Utstött", id: 70, type: "skam" },
    { name: "Rådlös", id: 71, type: "skam" },
  ];

  const [selected, setSelected] = React.useState(
    formData.selectedFeelings ? formData.selectedFeelings : new Set()
  );
  const userFeelings = [];

  function handleSelectionChanged(id) {
    // treat state as immutable
    // React only does a shallow comparison so we need a new Set
    const newSet = new Set(selected);
    if (newSet.has(id)) newSet.delete(id);
    else newSet.add(id);
    setSelected(newSet);

    //console.log(userFeelingsTwo);
  }
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    console.log("userFeelings");
    console.log(userFeelings);
    selected.forEach((id) => {
      const isFound = userFeelings.some((element) => {
        if (element.id === id) {
          return true;
        }
        return false;
      });

      console.log(isFound);

      if (id === 0 && !isFound) {
        userFeelings.push(allFeelings[id]);
      }
      if (id && !isFound) {
        userFeelings.push(allFeelings[id]);
      }
      //  console.log("userFeelings");
      // console.log(userFeelings);
    });
    setFormData(userFeelings);

    if (selected.size > 0) {
      setIsDone ? setIsDone(true) : console.log("not done");
    }
  }, [selected]);

  interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }

  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children} </Typography>
          </Box>
        )}
      </div>
    );
  }

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  return (
    <>
      <Box
        sx={{
          width: "100%",
          zIndex: 1000,
        }}
      >
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            m: "auto",
            width: { smallScreen } ? "90%" : "100%",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            variant={smallScreen ? "scrolname" : "standard"}
            centered={!smallScreen}
            TabIndicatorProps={{ sx: { display: "none" } }}
            sx={{
              textAlign: "center",
              fontSize: "0.2rem",
              "& .Mui-selected": {
                color: theme.palette.primary.main,
                fontWeight: 700,
                textDecoration: "underline",
              },
              "& .MuiTabs-flexContainer": {
                flexWrap: "wrap",
                justifyContent: "center",
              },
              "& .MuiTab-root": {
                minWidth: "70px",
              },
            }}
          >
            <Tab label="Sorg" {...a11yProps(0)} />
            <Tab label="Rädsla" {...a11yProps(1)} />
            <Tab label="Skam" {...a11yProps(2)} />
            <Tab label="Glädje" {...a11yProps(3)} />
            <Tab label="Avsky" {...a11yProps(4)} />
            <Tab label="Ilska" {...a11yProps(5)} />
          </Tabs>
        </Box>

        <Box sx={{ textAlign: "center" }}>
          {" "}
          <TabPanel value={value} index={0}>
            {allFeelings.map((data) => {
              if (data.type === "sorg") {
                return (
                  <Chip
                    color="primary"
                    variant={selected.has(data.id) ? "contained" : "outlined"}
                    label={data.name}
                    id={`custom-chip-${data.id}`}
                    onClick={() => {
                      handleSelectionChanged(data.id);
                    }}
                    sx={{ mr: 1, mt: 1 }}
                  />
                );
              } else {
                return null;
              }
            })}
          </TabPanel>
          <TabPanel value={value} index={1}>
            {allFeelings.map((data) => {
              if (data.type === "rädsla") {
                return (
                  <Chip
                    color="primary"
                    variant={selected.has(data.id) ? "contained" : "outlined"}
                    label={data.name}
                    id={`custom-chip-${data.id}`}
                    onClick={() => {
                      handleSelectionChanged(data.id);
                    }}
                    sx={{ mr: 1, mt: 1 }}
                  />
                );
              } else {
                return null;
              }
            })}
          </TabPanel>
          <TabPanel value={value} index={2}>
            {allFeelings.map((data) => {
              if (data.type === "skam") {
                return (
                  <Chip
                    color="primary"
                    variant={selected.has(data.id) ? "contained" : "outlined"}
                    label={data.name}
                    id={`custom-chip-${data.id}`}
                    onClick={() => {
                      handleSelectionChanged(data.id);
                    }}
                    sx={{ mr: 1, mt: 1 }}
                  />
                );
              } else {
                return null;
              }
            })}
          </TabPanel>
          <TabPanel value={value} index={3}>
            {allFeelings.map((data) => {
              if (data.type === "glädje") {
                return (
                  <Chip
                    color="primary"
                    variant={selected.has(data.id) ? "contained" : "outlined"}
                    label={data.name}
                    id={`custom-chip-${data.id}`}
                    onClick={() => {
                      handleSelectionChanged(data.id);
                    }}
                    sx={{ mr: 1, mt: 1 }}
                  />
                );
              } else {
                return null;
              }
            })}
          </TabPanel>
          <TabPanel value={value} index={4}>
            {allFeelings.map((data) => {
              if (data.type === "avsky") {
                return (
                  <Chip
                    color="primary"
                    variant={selected.has(data.id) ? "contained" : "outlined"}
                    label={data.name}
                    id={`custom-chip-${data.id}`}
                    onClick={() => {
                      handleSelectionChanged(data.id);
                    }}
                    sx={{ mr: 1, mt: 1 }}
                  />
                );
              } else {
                return null;
              }
            })}
          </TabPanel>
          <TabPanel value={value} index={5}>
            {allFeelings.map((data) => {
              if (data.type === "ilska") {
                return (
                  <Chip
                    color="primary"
                    variant={selected.has(data.id) ? "contained" : "outlined"}
                    label={data.name}
                    id={`custom-chip-${data.id}`}
                    onClick={() => {
                      handleSelectionChanged(data.id);
                    }}
                    sx={{ mr: 1, mt: 1 }}
                  />
                );
              } else {
                return null;
              }
            })}
          </TabPanel>
        </Box>
      </Box>
    </>
  );
}

export default Feelings;
