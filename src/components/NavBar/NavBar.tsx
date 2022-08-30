import { AppLogo, ResponsiveAppLogo } from "../AppLogo";
import { Box, Stack, useScrollTrigger } from "@mui/material";
import React from "react";
import { NonTransformedButton } from "../NonTransformedButton";
import { useRecoilValue } from "recoil";
import navbarHeightState from "../../store/navbarHeightState";
import { NavBarContainer } from "./NavBarContainer";
import responsiveState from "../../store/responsiveState";

type Props = {
  variant: "static" | "fixed";
};

const NavBar = ({ variant }: Props) => {
  const height = useRecoilValue(navbarHeightState);
  const fixed = variant === "fixed";
  const m = 0.5;

  return (
    <NavBarContainer
      color="transparent"
      square={false}
      sx={{
        height: `calc(${height} - ${m * 2}rem)`,
        width: `calc(100% - ${m * (fixed ? 0 : 2)}vw)`,
        transition: "0.5s all",
        margin: fixed ? 0 : `${m}vw`,
      }}
    >
      <Stack height="100%" direction="row" alignItems="center">
        <Box mx={2}>
          <ResponsiveAppLogo />
        </Box>
        <div style={{ flexGrow: 1 }} />
        <Stack direction="row" spacing={2} mx={3}>
          <NonTransformedButton color="secondary" variant="contained">
            Sign Up
          </NonTransformedButton>
          <NonTransformedButton color="secondary" variant="outlined">
            Sign In
          </NonTransformedButton>
        </Stack>
      </Stack>
    </NavBarContainer>
  );
};

export const NAVBAR_HEIGHT_SM = "48px";
export const NAVBAR_HEIGHT_MD = "64px";
export const NAVBAR_HEIGHT_LG = "80px";
export default NavBar;
