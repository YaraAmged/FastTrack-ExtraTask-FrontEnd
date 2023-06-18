import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import styles from "./WebsiteInfoCard.module.css";
const WebsiteInfo = ({ card }) => {
  return (
    <Box width={240}>
      <Stack
        gap={2}
        alignItems={"center"}
        sx={{ background: "white" }}
        direction={"row"}
        p={"20px"}
      >
        <img
          src={process.env.PUBLIC_URL + card.icon}
          alt=""
          width={48}
          height={48}
        />
        <Stack className={styles.content}>
          <Typography fontWeight={"bold"} fontSize={"24px"}>
            {card.count}
          </Typography>
          <Typography className={styles.info} fontSize={14}>
            {card.info}
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};
export default WebsiteInfo;
