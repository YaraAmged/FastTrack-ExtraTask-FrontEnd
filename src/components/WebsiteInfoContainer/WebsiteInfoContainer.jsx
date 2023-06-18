import { Box, Stack } from "@mui/material";
import React from "react";
import WebsiteInfo from "./WebsiteInfoCard/WebsiteInfoCard";
import styles from "./WebsiteInfoContainer.module.css";
const cards = [
  {
    icon: "/icons/icn-settings-icnlg.svg",
    count: "1.5K",
    info: "HAPPY CUSTOMERS",
  },
  {
    icon: "/icons/icn-settings-icnlg1.svg",
    count: "3K",
    info: "CASES DONE",
  },
  {
    icon: "/icons/icn-settings-icnlg2.svg",
    count: "45",
    info: "AWARD WINNING",
  },
  {
    icon: "/icons/icn-settings-icnlg3.svg",
    count: "12+",
    info: "COUNTRIES WORLDWIDE",
  },
];
const WebsiteInfoContainer = () => {
  return (
    <Box
      className={styles.container}
      sx={{
        transform: { sm: "translateY(70%)" },
        background: { sm: "white" },
      }}
    >
      <Stack
        direction={{ sm: "row", xs: "column" }}
        justifyContent={"space-between"}
        alignItems={"center"}
        gap={{ sm: 0, xs: 4 }}
        p={{ xs: 7, sm: 0 }}
      >
        {cards.map((card, i) => (
          <WebsiteInfo key={i} card={card} />
        ))}
      </Stack>
    </Box>
  );
};
export default WebsiteInfoContainer;
