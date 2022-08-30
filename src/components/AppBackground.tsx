import React from "react";
import { styled } from "@mui/material";
import { useRecoilValue } from "recoil";
import appBackgroundState from "../store/appBackgroundState";

const HomeBackgroundComponent = styled("img")({
  width: "100%",
  height: "100%",
  position: "absolute",
  opacity: 0.2,
  top: 0,
  zIndex: -1,
});

const AppBackground = () => {
  const background = useRecoilValue(appBackgroundState);

  return (
    <HomeBackgroundComponent src={background} alt="Home Background Image" />
  );
};

export default AppBackground;
