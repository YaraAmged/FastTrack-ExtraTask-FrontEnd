import { Box, Container, Grid } from "@mui/material";
import React from "react";
import ServiceCard from "./ServiceCard/ServiceCard.jsx";

const services = [
  {
    img: "/icons/icn-settings-icnlg4.svg",
    title: "Business Growing",
    description: "the quick fox jumps over the lazy dogs",
  },
  {
    img: "/icons/icn-settings-icnlg5.svg",
    title: "Digital Marketing",
    description: "the quick fox jumps over the lazy dogs",
  },
  {
    img: "/icons/icn-settings-icnlg6.svg",
    title: "National top 50 firms",
    description: "the quick fox jumps over the lazy dogs",
  },
  {
    img: "/icons/icn-settings-icnlg7.svg",
    title: "Digital Marketing",
    description: "the quick fox jumps over the lazy dogs",
  },
];
const Services = () => {
  return (
    <Box sx={{ background: "#FAFAFA" }} component={"section"}>
      <Container>
        <Grid container spacing={5}>
          {services.map((service, i) => (
            <ServiceCard service={service} highlight={i === 3} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
