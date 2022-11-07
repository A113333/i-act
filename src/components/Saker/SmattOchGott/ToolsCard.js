import React from "react";

import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardActionArea,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { useTheme } from "@emotion/react";
function ToolsCard({ title, desc, readMoreLink, startLink }) {
  const theme = useTheme();
  const readMoreClick = () => {
    console.log(readMoreLink);
  };
  return (
    <Grid sx={12} sm={5} lg={4} item>
      <Card
        sx={{
          p: 2,
          m: { xs: "auto", sm: 2 },
          mt: { xs: 2, sm: 2 },
          pb: 0,
        }}
      >
        <CardActionArea component={Link} to={startLink}>
          <Typography sx={{ fontWeight: 700 }}> {title}</Typography>
          <Typography> {desc} </Typography>
        </CardActionArea>

        <Button
          sx={{
            color: "#000050",
            fontWeight: 500,
            textAlign: "left",
            display: "inline-block",
            pl: 0,
          }}
          onClick={() => readMoreClick(readMoreLink)}
        >
          Läs mer
        </Button>

        <Divider />
        <Button variant="text" component={Link} to={startLink} fullWidth>
          Starta
        </Button>
      </Card>
    </Grid>
  );
}

export default ToolsCard;
