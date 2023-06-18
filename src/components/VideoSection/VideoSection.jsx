import { Box, Container, Grid, Stack, Typography } from "@mui/material";

const VideoSection = () => {
  return (
    <Box sx={{ background: "#FAFAFA" }} component={"section"}>
      <Container>
        <Grid container justifyContent={"space-between"} spacing={4}>
          <Grid item xs={12} sm={6}>
            <Box
              component={"img"}
              maxWidth={{ sm: "597px", xs: "100%" }}
              src=""
              alt="cover"
              sx={{
                content: {
                  xs: `url(${
                    process.env.PUBLIC_URL + "/imgs/VideoStreaming-xs.jpeg"
                  })`,
                  sm: `url(${
                    process.env.PUBLIC_URL + "/imgs/VideoStreaming.jpg"
                  })`,
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Stack px={{ sm: 13 }} pt={1}>
              <Typography className="sectionTitle" color={"#252B42"}>
                Most trusted in our field
              </Typography>
              <Typography
                className="sectionSubTitle"
                width={"330px"}
                fontWeight={"500"}
              >
                Most calenders are designed for teams. Slate is designed for
                freelances who want a simple way to plan their schedule.
              </Typography>
              <Stack gap={3} mt={5}>
                {[
                  "/icons/icn-settings-icnmd2.svg",
                  "/icons/icn-settings-icnmd3.svg",
                ].map((img) => (
                  <Stack direction={"row"} alignItems={"flex-start"} gap={2}>
                    <img src={process.env.PUBLIC_URL + img} alt="" />
                    <Stack gap={1}>
                      <Typography
                        className={"primaryText"}
                        fontWeight={"bold"}
                        fontSize={16}
                      >
                        the quick fox jumps over the lazy dog
                      </Typography>
                      <Typography
                        className="grayText"
                        fontSize={14}
                        fontWeight={"600"}
                      >
                        Things on a very small scale ...
                      </Typography>
                    </Stack>
                  </Stack>
                ))}
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default VideoSection;
