import React, { useState, useEffect } from "react";
import { Box, Tab, Tabs, Chip, Typography } from "@mui/material";
import useTheme from "@mui/material/styles/useTheme";

// set is done = function för att göra knapp vidare möjlig
//set FormData: setter funktion där valda känslor
function Feelings({ setIsDone, setFormData, formData, feelings }) {
  const mql = window.matchMedia("(max-width: 550px)");
  const smallScreen = mql.matches;
  const theme = useTheme();

  const allFeelings = [
    { lable: "Kritisk", id: 0, type: "ilska" },
    { lable: "Förödmjukad", id: 1, type: "ilska" },
    { lable: "Ursinnig", id: 2, type: "ilska" },
    { lable: "Bitter", id: 3, type: "ilska" },
    { lable: "Aggressiv", id: 4, type: "ilska" },
    { lable: "Frustrerad", id: 5, type: "ilska" },
    { lable: "Skeptisk", id: 6, type: "ilska" },
    { lable: "Avundsjuk", id: 7, type: "ilska" },
    { lable: "Arg", id: 8, type: "ilska" },
    { lable: "Kränkt", id: 9, type: "ilska" },
    { lable: "Provocerad", id: 10, type: "ilska" },
    { lable: "Irriterad", id: 11, type: "ilska" },

    { lable: "Ogillande", id: 12, type: "avsky" },
    { lable: "Besviken", id: 13, type: "avsky" },
    { lable: "Förfärad", id: 14, type: "avsky" },
    { lable: "Avståndstagande", id: 15, type: "avsky" },
    { lable: "Avsmak", id: 16, type: "avsky" },
    { lable: "Motbjudande", id: 17, type: "avsky" },
    { lable: "Dömande", id: 18, type: "avsky" },
    { lable: "Upprörd", id: 19, type: "avsky" },
    { lable: "Äcklad", id: 20, type: "avsky" },
    { lable: "Tveksam", id: 21, type: "avsky" },
    { lable: "Motvilja", id: 22, type: "avsky" },
    { lable: "Avskyvärt", id: 23, type: "avsky" },

    { lable: "Chock", id: 24, type: "rädsla" },
    { lable: "Hotad", id: 25, type: "rädsla" },
    { lable: "Skräckslagen", id: 26, type: "rädsla" },
    { lable: "Undergiven", id: 27, type: "rädsla" },
    { lable: "Osäker", id: 28, type: "rädsla" },
    { lable: "Orolig", id: 29, type: "rädsla" },
    { lable: "Överväldigad", id: 30, type: "rädsla" },
    { lable: "Underlägsen", id: 31, type: "rädsla" },
    { lable: "Värdelös", id: 32, type: "rädsla" },
    { lable: "Paralyserad", id: 33, type: "rädsla" },
    { lable: "Skrämd", id: 34, type: "rädsla" },
    { lable: "Nervös", id: 35, type: "rädsla" },

    { lable: "Intresserad", id: 36, type: "glädje" },
    { lable: "Euforisk", id: 37, type: "glädje" },
    { lable: "Accepterad", id: 38, type: "glädje" },
    { lable: "Lycklig", id: 39, type: "glädje" },
    { lable: "Optimistisk", id: 40, type: "glädje" },
    { lable: "Kärleksfull", id: 41, type: "glädje" },
    { lable: "Frågvis", id: 42, type: "glädje" },
    { lable: "Upprymd", id: 43, type: "glädje" },
    { lable: "Respekterad", id: 44, type: "glädje" },
    { lable: "Gladlynt", id: 45, type: "glädje" },
    { lable: "Inspirerad", id: 46, type: "glädje" },
    { lable: "Intim", id: 47, type: "glädje" },

    { lable: "Sårbar", id: 48, type: "sorg" },
    { lable: "Förtvivlad", id: 49, type: "sorg" },
    { lable: "Nedstämd", id: 50, type: "sorg" },
    { lable: "Olycklig", id: 51, type: "sorg" },
    { lable: "Ensam", id: 52, type: "sorg" },
    { lable: "Bedrövad", id: 53, type: "sorg" },
    { lable: "Sårad", id: 54, type: "sorg" },
    { lable: "Försummad", id: 55, type: "sorg" },
    { lable: "Nedslagen", id: 56, type: "sorg" },
    { lable: "Tom", id: 57, type: "sorg" },
    { lable: "Maktlös", id: 58, type: "sorg" },
    { lable: "Skör", id: 59, type: "sorg" },

    { lable: "Ånger", id: 60, type: "skam" },
    { lable: "Blyg", id: 61, type: "skam" },
    { lable: "Skyldig", id: 62, type: "skam" },
    { lable: "Oduglig", id: 63, type: "skam" },
    { lable: "Avvisad", id: 64, type: "skam" },
    { lable: "Besviken", id: 65, type: "skam" },
    { lable: "Dåligt samvete", id: 66, type: "skam" },
    { lable: "Undfallande", id: 67, type: "skam" },
    { lable: "Generad", id: 68, type: "skam" },
    { lable: "Misslyckad", id: 69, type: "skam" },
    { lable: "Utstött", id: 70, type: "skam" },
    { lable: "Rådlös", id: 71, type: "skam" },
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
      setIsDone(true);
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
            <Typography>{children}</Typography>
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

          position: "fixed",
          top: "30vh",
          left: 0,
          zIndex: 1000,
          width: "100%",
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
            variant={smallScreen ? "scrollable" : "standard"}
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

        <TabPanel value={value} index={0}>
          {allFeelings.map((data) => {
            if (data.type === "sorg") {
              return (
                <Chip
                  color="primary"
                  variant={selected.has(data.id) ? "contained" : "outlined"}
                  label={data.lable}
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
                  label={data.lable}
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
                  label={data.lable}
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
                  label={data.lable}
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
                  label={data.lable}
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
                  label={data.lable}
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
    </>
  );
}

export default Feelings;
