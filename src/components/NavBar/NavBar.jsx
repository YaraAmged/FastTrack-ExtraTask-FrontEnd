import { Grid, Hidden, Stack, Typography } from "@mui/material";
import React from "react";
import { ReactComponent as SearchIcon } from "../../icons/icn-search-icnxs.svg";
import { ReactComponent as CartIcon } from "../../icons/icn-shoppingcart-icnxs.svg";
import { ReactComponent as MenuIcon } from "../../icons/navbartoggler.svg";
import styles from "./NavBar.module.css";

const NavbarItems = () => {
  return (
    <Stack
      my={{ xs: "80px", sm: 0 }}
      direction={{ xs: "column", sm: "row" }}
      gap={{ sm: "21px", xs: "35px" }}
      alignItems={"center"}
      fontWeight={{ xs: "400", sm: "bold" }}
      textAlign={"center"}
      sx={{ "& p": { fontSize: { xs: 30, sm: 14 } } }}
    >
      <Typography>Home</Typography>
      <Typography>Product</Typography>
      <Typography>Pricing</Typography>
      <Typography>Contact</Typography>
    </Stack>
  );
};
const NavBar = () => {
  return (
    <Grid
      container
      alignItems={"center"}
      paddingLeft={{ sm: 16, xs: 4 }}
      paddingRight={{ sm: 8, xs: 4 }}
      spacing={{ sm: 10, xs: 2 }}
      paddingY={5}
      justifyContent={"space-between"}
      sx={{
        background: { xs: "white", sm: "none" },
        color: { xs: "#737373", sm: "white" },
        fill: { xs: "#737373", sm: "white" },
      }}
    >
      <Grid item>
        <Typography
          className={styles.logo}
          sx={{ color: { xs: "black", sm: "white" } }}
        >
          CompanyLogo
        </Typography>
      </Grid>
      <Grid item xs>
        <Stack direction={"row"} gap={3} justifyContent={"flex-end"}>
          <Hidden smDown>
            <NavbarItems />
          </Hidden>
          <Stack direction="row" gap={"18px"} alignItems={"center"}>
            <SearchIcon className={styles.icon} />
            <CartIcon className={styles.icon} />
          </Stack>
        </Stack>
      </Grid>
      <Grid item>
        <MenuIcon className={styles.menuIcon} />
      </Grid>
      <Grid item xs={12}>
        <Hidden smUp>
          <NavbarItems />
        </Hidden>
      </Grid>
    </Grid>
  );
};
export default NavBar;
