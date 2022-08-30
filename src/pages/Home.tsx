import { Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { NonTransformedButton } from "../components/NonTransformedButton";
import appBackgroundState from "../store/appBackgroundState";
import Section from "./Section/Section";

const Home = () => {
  const setAppBackground = useSetRecoilState(appBackgroundState);

  useEffect(() => {
    setAppBackground("/src/assets/home_background.png");
  }, []);

  function handleDownload() {
    const a = document.createElement("a");
    a.href = "/src/totally-legitimate-ide.txt";
    a.download = "totally-legitimate-ide.txt";

    a.click();
  }

  return (
    <>
      <Stack>
        <Stack
          minHeight="60%"
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Stack>
            <Typography
              variant="h3"
              fontWeight="bold"
              sx={{
                width: "max-content",
                backgroundClip: "text",
                backgroundImage:
                  "linear-gradient(225deg, #0f40ff 30%, #5ebffb 60%, #ff5fff 100%)",
                WebkitTextFillColor: "transparent",
              }}
            >
              Snowflake
            </Typography>
            <Typography
              sx={{
                fontSize: "1.75rem",
              }}
            >
              A simple, yet powerful, IDE for TypeScript.
            </Typography>
            <Stack
              direction="row"
              spacing={5}
              mt={5}
              sx={{
                fontSize: "1rem",
              }}
            >
              <NonTransformedButton
                color="secondary"
                variant="outlined"
                sx={{
                  fontSize: "1em",
                }}
              >
                Learn More
              </NonTransformedButton>
              <NonTransformedButton
                color="secondary"
                sx={{
                  color: "white",
                  fontSize: "1em",
                }}
                variant="contained"
                onClick={handleDownload}
              >
                Download
              </NonTransformedButton>
            </Stack>
          </Stack>
          <img
            src="/src/assets/home_programmer.svg"
            alt="Programmer"
            style={{ width: "50%" }}
          />
        </Stack>
        <Stack>
          <Section />
        </Stack>
      </Stack>
    </>
  );
};

export default Home;
