import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import styles from "./ServiceCard.module.css";

const ServiceCard = ({ service, highlight }) => {
  return (
    <Grid item xs={12} sm={3}>
      <Stack
        gap={"20px"}
        className={`${styles.root} ${highlight ? styles.highlight : ""}`}
        alignItems={"flex-start"}
      >
        <img
          src={process.env.PUBLIC_URL + service.img}
          alt={service.title}
          className={styles.icon}
        />
        <Typography variant="h5" fontWeight={"400"} color={"#252B42"}>
          {service.title}
        </Typography>
        <Typography fontWeight={"700"} fontSize={"14px"} color={"#737373"}>
          {service.description}
        </Typography>
        <button className={styles.btn}>
          <Stack direction={"row"} gap={"6px"}>
            More
            {!highlight && (
              <img
                src={process.env.PUBLIC_URL + "/icons/icn-arrowright-icnxs.svg"}
                alt="arrow-right"
              />
            )}
          </Stack>
        </button>
      </Stack>
    </Grid>
  );
};
export default ServiceCard;
