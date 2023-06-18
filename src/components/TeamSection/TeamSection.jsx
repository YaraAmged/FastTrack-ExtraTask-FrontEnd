import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import TeamMemberCard from "./TeamMemberCard/TeamMemberCard";
const teamMembers = [
  {
    img: "/icons/circlebox2.svg",
    title: "CO Founder",
    name: "Avie Beaton",
    description: "the quick fox jumps over the lazy dogs",
  },
  {
    img: "/icons/circlebox4.svg",
    title: "Consultant",
    name: "Ben Jonson",
    description: "the quick fox jumps over the lazy dogs",
  },
  {
    img: "/icons/circlebox5.svg",
    title: "Consultant",
    name: "Rodney Stratton",
    description: "the quick fox jumps over the lazy dogs",
  },
  {
    img: "/icons/circlebox6.svg",
    title: "Consultant",
    name: "Ben Jonson",
    description: "the quick fox jumps over the lazy dogs",
  },
];
const TeamSection = () => {
  return (
    <Box sx={{ background: "#FAFAFA" }} component={"section"}>
      <Container>
        <Stack gap={5}>
          <Stack gap={2} alignItems={"center"} textAlign={"center"}>
            <Typography className="sectionTitle">Meet Our Team</Typography>
            <Typography
              fontWeight={"500"}
              color={"#737373"}
              className="sectionSubTitle"
              width={{ sm: 550 }}
            >
              Problems trying to resolve the conflict between <br />
              the two major realms of Classical physics: Newtonian mechanics
            </Typography>
          </Stack>
          <Grid container spacing={5}>
            {teamMembers.map((teamMember) => (
              <TeamMemberCard teamMember={teamMember} />
            ))}
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
};

export default TeamSection;
