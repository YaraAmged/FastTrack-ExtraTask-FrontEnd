import {
  Box,
  Container,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import styles from "./FreeQuotaForm.module.css";
const FreeQuotaForm = () => {
  return (
    <Box sx={{ background: "#FAFAFA" }} component={"section"} height={{sm:300}}>
      <Container >
        <Grid
          container
          alignItems={"stretch"}
          sx={{ transform: { sm: "translateY(-55%)" }, background: "white" }}
          columns={16}
        >
          <Grid item sm={5} xs={16}>
            <Box
              component={"img"}
              alt="form"
              sx={{
                maxWidth: "100%",
                height: "100%",
                content: {
                  xs: `url(${process.env.PUBLIC_URL + "/imgs/cover13@2x.png"})`,
                  sm: `url(${process.env.PUBLIC_URL + "/imgs/cover4@2x.png"})`,
                },
              }}
            />
          </Grid>

          <Grid item sm={11} xs={16}>
            <Stack gap={3} px={{ sm: "60px" }} pt={"50px"}>
              <Typography className="sectionTitle">
                Get A Free Quota Here
              </Typography>
              <Stack gap={2}>
                <Stack>
                  <InputLabel>
                    Name <sub> *</sub>
                  </InputLabel>
                  <TextField variant="outlined" placeholder="Full Name" />
                </Stack>
                <Stack>
                  <InputLabel>
                    Email <sub> *</sub>
                  </InputLabel>
                  <TextField
                    variant="outlined"
                    placeholder="example@gmail.com"
                  />
                </Stack>
                <Stack>
                  <InputLabel>
                    Department <sub> *</sub>
                  </InputLabel>
                  <Select variant="outlined" displayEmpty value={""}>
                    <MenuItem value="">Please Select</MenuItem>
                  </Select>
                </Stack>
                <Stack>
                  <InputLabel>
                    Time <sub> *</sub>
                  </InputLabel>
                  <Select variant="outlined" value="" displayEmpty>
                    <MenuItem value="">4:00 Available</MenuItem>
                  </Select>
                </Stack>
              </Stack>
              <button className={styles.btn}>Book Appointment</button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FreeQuotaForm;
