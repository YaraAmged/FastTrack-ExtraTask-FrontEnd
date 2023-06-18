import { Grid, Stack, Typography } from "@mui/material";
import styles from "./TeamMemberCard.module.css";
const TeamMemberCard = ({ teamMember }) => {
  return (
    <Grid item xs={12} sm={3}>
      <Stack
        gap={1}
        className={styles.root}
        alignItems={"center"}
        textAlign={"center"}
      >
        <img
          className={styles.img}
          src={process.env.PUBLIC_URL + teamMember.img}
          alt={teamMember.name}
        />
        <Typography color={"#FFA62B"} fontWeight={"600"} fontSize={"14px"}>
          {teamMember.title}
        </Typography>
        <Typography className="primaryText" fontWeight={"700"}>
          {teamMember.name}
        </Typography>
        <Typography fontSize={"14px"}className="grayText">{teamMember.description}</Typography>
      </Stack>
    </Grid>
  );
};
export default TeamMemberCard;
