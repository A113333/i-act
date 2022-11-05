import React from "react";

import { Link } from "react-router-dom";
import { Button, Divider, Grid, Paper, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
function ToolsCard({ title, desc, readMoreLink, startLink }) {
  const theme = useTheme();
  const readMoreClick = () => {
    console.log("read more");
  };
  return (
    <Grid sx={12} sm={5} lg={4} item>
      <Paper
        sx={{
          p: 2,
          m: { xs: "auto", sm: 2 },
          mt: { xs: 2, sm: 2 },
          pb: 0,
        }}
      >
        <Typography sx={{ fontWeight: 700 }}> {title}</Typography>
        <Typography>
          {desc}
          <Button
            sx={{
              color: "#000050",
              fontWeight: 500,
              textAlign: "left",
              display: "inline-block",
            }}
            onClick={() => readMoreClick("utmanaNat")}
          >
            Läs mer
          </Button>
        </Typography>
        <Divider />
        <Button variant="text" component={Link} to={startLink} fullWidth>
          Starta
        </Button>
      </Paper>
    </Grid>
  );
}

export default ToolsCard;
