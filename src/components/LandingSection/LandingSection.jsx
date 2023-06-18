import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import NavBar from "../NavBar/NavBar";
import WebsiteInfoContainer from "../WebsiteInfoContainer/WebsiteInfoContainer";
import styles from "./LandingSection.module.css";
const LandingSection = () => {
  return (
    <Box
      className={styles.background}
      sx={{
        background: {
          sm: `url(${process.env.PUBLIC_URL + "/imgs/cover@2x.png"})`,
          xs: `url(${process.env.PUBLIC_URL + "/imgs/cover7@2x.jpeg"})`,
        },
      }}
    >
      <div className={styles.backgroundCover}>
        <NavBar />
        <Container>
          <Stack
            alignItems={"center"}
            marginTop={10}
            gap={3}
            textAlign={"center"}
            pb={"100px"}
          >
            <Typography
              className={styles.title}
              width={{ sm: 727 }}
              fontSize={{ xs: 40, sm: 58 }}
            >
              Experts are here solve your business problem.
            </Typography>
            <Typography className={styles.info} width={{ sm: 540 }}>
              We know how large objects will act, but things on a small scale
              just do not act that way.
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} gap={"10px"}>
              <button className={styles.quoteBtn}>Get Quote Now</button>
              <button className={styles.learnMBtn}>Learn More</button>
            </Stack>
          </Stack>
          <WebsiteInfoContainer />
        </Container>
      </div>
    </Box>
  );
};
export default LandingSection;
