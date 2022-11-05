import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/system";

function Faq() {
  return (
    <div>
      <Box sx={{ width: "80%", margin: "auto", mt: 10, mb: 15 }}>
        <Typography variant="h5" sx={{ paddingLeft: 2 }}>
          Vanliga frågor
        </Typography>

        <Accordion sx={{ boxShadow: "none" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ paddingLeft: 2 }}
          >
            <Typography sx={{ fontFamily: "comfortaa", fontWeight: "400" }}>
              Accordion 1
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ boxShadow: "none" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ paddingLeft: 2 }}
          >
            <Typography sx={{ fontFamily: "comfortaa", fontWeight: "400" }}>
              Accordion 2
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ boxShadow: "none" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ paddingLeft: 2 }}
          >
            <Typography sx={{ fontFamily: "comfortaa", fontWeight: "400" }}>
              Accordion 3
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ boxShadow: "none" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ paddingLeft: 2 }}
          >
            <Typography sx={{ fontFamily: "comfortaa", fontWeight: "400" }}>
              Accordion 4
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ boxShadow: "none" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ paddingLeft: 2 }}
          >
            <Typography sx={{ fontFamily: "comfortaa", fontWeight: "400" }}>
              Accordion 5
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </div>
  );
}

export default Faq;
