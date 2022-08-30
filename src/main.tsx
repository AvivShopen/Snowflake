import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import App from "./App";
import "./index.css";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#242424",
    },
    secondary: {
      main: "#3e6fff",
    },
  },
  typography: {
    fontFamily: "SF Pro",
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <RecoilRoot>
      <ThemeProvider theme={lightTheme}>
        <App />
      </ThemeProvider>
    </RecoilRoot>
  </BrowserRouter>
);
