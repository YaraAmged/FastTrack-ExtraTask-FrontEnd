import { Container, Grid, Stack, Typography } from "@mui/material";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <Container component={"section"} className={styles.root}>
      <Grid container spacing={3} px={{ xs: "50px", sm: "60px" }}>
        <Grid item xs={12} sm={3}>
          <Stack>
            <Typography className={styles.header}>Get In Touch</Typography>
            <Stack gap={2} className={styles.content}>
              <Typography>the quick fox jumps over the lazy dog</Typography>
              <Stack direction={"row"} gap={2}>
                {[
                  "/icons/antdesignfacebookfilled.svg",
                  "/icons/antdesigninstagramoutlined.svg",
                  "/icons/antdesigntwitteroutlined1.svg",
                  "/icons/carbonlogoyoutube1.svg",
                ].map((img) => (
                  <img
                    src={process.env.PUBLIC_URL + img}
                    alt=""
                    width={20}
                    height={20}
                  />
                ))}
              </Stack>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography className={styles.header}>Company Info</Typography>
          <Stack gap={2} className={styles.content}>
            <Typography>About Us</Typography>
            <Typography>Carrier</Typography>
            <Typography>We are hiring</Typography>
            <Typography>Blog</Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography className={styles.header}>Features</Typography>
          <Stack gap={2} className={styles.content}>
            <Typography>Business Marketing</Typography>
            <Typography>User Analytics</Typography>
            <Typography>Live Chat</Typography>
            <Typography>Unlimited Support</Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography className={styles.header}>Resources</Typography>
          <Stack gap={2} className={styles.content}>
            <Typography>IOS & Android</Typography>
            <Typography>Watch a Demo</Typography>
            <Typography>Customers</Typography>
            <Typography>API</Typography>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Footer;
