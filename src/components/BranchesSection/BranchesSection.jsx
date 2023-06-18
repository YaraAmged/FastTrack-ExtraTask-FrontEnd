import { Box, Container, Grid, Typography } from "@mui/material";
import styles from "./BranchesSection.module.css";
const BranchesSection = () => {
  return (
    <Box
      sx={{ background: "#252B42", pb: { sm: "400px" } }}
      component={"section"}
    >
      <Container>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6}>
            <Typography
              sx={{ fontWeight: "600 !important" }}
              className="sectionTitle light"
            >
              We Have Branches All Over The World
            </Typography>
            <Typography
              className="sectionSubTitle light"
              fontSize={"14px"}
              fontWeight={"500"}
              width={{ sm: "455px" }}
            >
              The gradual accumulation of information about atomic and
              small-scale behaviour during the first quarter of the 20th
              century, which gave some indications about how small things do
              behave, produced an increasing confusion which was Heisenberg, and
              Born.{" "}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img
              src={process.env.PUBLIC_URL + "/imgs/pngwing-1@2x.png"}
              alt="b"
              className={styles.img}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default BranchesSection;
