import { Box, useMediaQuery, useScrollTrigger, useTheme } from "@mui/material";
import React, { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import AppBackground from "./components/AppBackground";
import NavBar from "./components/NavBar/NavBar";
import RouterView from "./routes/RouterView";
import appBackgroundState from "./store/appBackgroundState";
import navbarHeightState from "./store/navbarHeightState";
import responsiveState from "./store/responsiveState";

function App() {
  const theme = useTheme();
  const setResponsiveState = useSetRecoilState(responsiveState);
  const navbarHeight = useRecoilValue(navbarHeightState);
  const scrollTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 5,
  });

  const xs = useMediaQuery(theme.breakpoints.up("xs"));
  const sm = useMediaQuery(theme.breakpoints.up("sm"));
  const md = useMediaQuery(theme.breakpoints.up("md"));
  const lg = useMediaQuery(theme.breakpoints.up("lg"));

  useEffect(() => {
    setResponsiveState({ xs, sm, md, lg });
  }, [xs, sm, md, lg]);

  return (
    <Box id="app">
      <AppBackground />
      <NavBar variant={scrollTrigger ? "fixed" : "static"} />
      <Box
        sx={{
          minHeight: `calc(100vh - ${navbarHeight})`,
          transform: scrollTrigger
            ? "translateY(0)"
            : `translateY(${navbarHeight})`,
        }}
      >
        <RouterView />
      </Box>
    </Box>
  );
}

export default App;
