import { Box, Container, Stack, Typography } from "@mui/material";

const ServicesDescription = () => {
  return (
    <Box sx={{ background: "#FAFAFA" }} component={"section"}  
    >
      <Container>
        <Stack alignItems={"center"} textAlign={"center"} gap={2}>
          <Typography className="sectionTitle" width={{ sm: 600 }}>
            We are providing best business service.
          </Typography>
          <Typography className="sectionSubTitle" width={{ sm: 520 }} fontWeight={"500"}>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};
export default ServicesDescription;
