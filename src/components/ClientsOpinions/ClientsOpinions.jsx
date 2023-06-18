import { Box, Stack, Typography } from "@mui/material";
import ClientsOpinionCard from "./ClientsOpinionCard/ClientsOpinionCard";
const opinions = [
  {
    img: "/icons/circlebox4.svg",
    name: "Regina Miles",
    title: "Designer",
    message:"This proved to be impossible using the traditional concepts of space and time. Einstein developed a new view of time first and then space. This proved to be impossible using the traditional concepts of space and time. Einstein developed a new view of time first and then space." },

  {
    img: "/icons/circlebox1.svg",
    name: "Regina Miles",
    title: "Designer",
    message:"This proved to be impossible using the traditional concepts of space and time. Einstein developed a new view of time first and then space. This proved to be impossible using the traditional concepts of space and time. Einstein developed a new view of time first and then space." },
  {
    img: "/icons/circlebox3.svg",
    name: "Regina Miles",
    title: "Designer",
    message:"This proved to be impossible using the traditional concepts of space and time. Einstein developed a new view of time first and then space. This proved to be impossible using the traditional concepts of space and time. Einstein developed a new view of time first and then space."
  },
  
];
const ClientsOpinions = () => {
  return (
    <Box sx={{ background: "#16697A" }} component={"section"}>
      <Stack gap={10}>
        <Stack alignItems={"center"} textAlign={"center"} gap={2}>
          <Typography className="sectionTitle light" color={"white"}>
            What Clients Say
          </Typography>
          <Typography
            className="sectionSubTitle light"
            color={"white"}
            width={{ sm: 550 }}
          >
            Problems trying to resolve the conflict between <br />
            the two major realms of Classical physics: Newtonian mechanics
          </Typography>
        </Stack>
        <Box overflow={"hidden"} maxWidth={"100%"} p={{ xs: 10, sm: 0 }}>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            gap={"90px"}
            width={{ sm: "max-content" }}
            sx={{ transform: { sm: "translateX(-100px)" } }}
            alignItems={"center"}
          >
            {opinions.map((opinion,i) => (
              <ClientsOpinionCard key={i} opinion={opinion} />
            ))}
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default ClientsOpinions;
