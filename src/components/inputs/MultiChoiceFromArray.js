import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Box } from "@mui/system";
import useTheme from "@mui/material/styles/useTheme";
import Grid from "@mui/material/Grid";

/* setFormData ska refferea till en den TOMMA ARR som valda värden skall återfinnas
dataArr är den Array användaren ska välja ifrån
maxNrToSelect är det antal val använder FÅR göra
minNrToSelect är det minsta antal val användaren får göra
selected ska vara en state  arr const [selected, setselected] = useState(new Set());
setISDone ska vara en boolean som är TRUE när användaren är klar på sidan (dvs har valt min eller max)
   */
function MultiChoiceFromArray({
  setFormData,
  dataArr,
  maxNrToSelect,
  minNrToSelect,
  selected,
  setselected,
  setIsDone,
}) {
  const getIndex = (id) => {
    const i = dataArr.findIndex((e) => e.id === id);
    return i;
  };

  function handleSelectionChanged(id) {
    console.log(selected);
    const newSet = new Set(selected);
    // om värdet redan är valt så väljs det bort
    if (newSet.has(id)) newSet.delete(id);
    // Lägger till id till set om maxNr to select inte finns eller inte är uppnått
    else if (maxNrToSelect ? maxNrToSelect !== selected.size : true) {
      console.log("köres");
      newSet.add(id);
    }
    // sätter Selected, sätts i parent component för att den ska kunna resetas
    setselected(newSet);

    // om det finns ett maxAntal som användaren får använda och det är uppnått så läggs id inte till
    if (minNrToSelect) {
      if (minNrToSelect ? newSet.size >= minNrToSelect : false) {
        setIsDone(true);
      } else setIsDone(false);
    }
    // ssätter övningen som färdig om man valt maxAntal
    else if (maxNrToSelect) {
      if (newSet.size === maxNrToSelect) {
        setIsDone(true);
      } else setIsDone(false);
    } else if (newSet.size > 0) setIsDone(true);
    else setIsDone(false);

    const userArr = [];
    newSet.forEach((item, index) => {
      userArr.push(dataArr[getIndex(item)]);
    });

    // sätter SVARS arrayn till alla svar
    setFormData(userArr);
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
                key={index}
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
