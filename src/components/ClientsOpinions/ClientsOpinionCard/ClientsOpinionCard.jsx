import { Box, Stack, Typography } from "@mui/material";
import styles from "./ClientsOpinionCard.module.css";
const ClientsOpinionCard = ({ opinion }) => {
  return (
    <Stack gap={2} className={styles.root} width={{ xs: "80%" }}>
      <Box
        component={"img"}
        src={process.env.PUBLIC_URL + opinion.img}
        alt={opinion.name}
        className={styles.img}
      />
      <Stack>
        <Typography
          className="primaryText"
          fontWeight={"bold"}
          fontSize={"18px"}
        >
          {opinion.name}
        </Typography>
        <Typography className="grayText" fontSize={"12px"}>
          {opinion.title}
        </Typography>
      </Stack>
      <img
        width={"110px"}
        src={process.env.PUBLIC_URL + "/icons/stars.svg"}
        alt=""
      />
      <Typography
        fontWeight={"500"}
        color={"#737373"}
        fontSize={"14px"}
        width={{ sm: "370px" }}
      >
        {opinion.message}
      </Typography>
    </Stack>
  );
};
export default ClientsOpinionCard;
