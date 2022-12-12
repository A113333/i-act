import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Box } from "@mui/system";
import useTheme from "@mui/material/styles/useTheme";
import Grid from "@mui/material/Grid";

/* setFormData exampel: 
  const formDataSetter = (data) => {
    setFormData({
      ...formData,
      values: data,
    });
  };
   */
function MultiChoiceFromArray({
  setFormData,
  dataArr,
  nrReq,
  restSelected,
  setrestSelected,
  setIsDone,
}) {
  const [selected, setSelected] = React.useState(new Set());

  const getIndex = (id) => {
    const i = dataArr.findIndex((e) => e.id === id);
    return i;
  };

  useEffect(() => {
    const userArr = [];
    selected.forEach((item, index) => {
      userArr.push(dataArr[getIndex(item)]);
    });
    // console.log("userArr");
    //console.log(userArr);
    setFormData(userArr);
    if (selected.size === nrReq) {
      console.log("körs");
      setIsDone(true);
    }
  }, [selected]);

  useEffect(() => {
    restSelected && setSelected(new Set());
    setrestSelected(false);
  }, [restSelected]);

  function handleSelectionChanged(id) {
    // treat state as immutable
    // React only does a shallow comparison so we need a new Set
    const newSet = new Set(selected);
    if (newSet.has(id)) newSet.delete(id);
    else if (nrReq ? nrReq !== selected.size : true) {
      newSet.add(id);
    }
    // TODO fixa popup som visar att man valt alla och måste välja bort
    else if (nrReq === selected.size) {
      console.log("för många valda");
    }
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
          {dataArr.map((data, index) => {
            return (
              <Card
                raised={false}
                // class={selected.has(data.id) ? "contained" : "outlined"}
                sx={{
                  width: { xs: "100%", sm: "60%" },
                  mb: index + 1 === dataArr.length ? 7 : 2,
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

                    {nrReq && (
                      <Typography
                        variant="body2"
                        sx={{
                          fontSize: "0.7rem",
                          position: "absolute",
                          top: 5,
                          right: 9,
                          visibility: selected.has(data.id)
                            ? "visible"
                            : "hidden",
                        }}
                      >
                        {selected.size}/{nrReq} valda
                      </Typography>
                    )}
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

export default MultiChoiceFromArray;
