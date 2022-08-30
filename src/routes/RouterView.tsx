import React from "react";
import { Route, Routes } from "react-router-dom";
import routes from "./routes";

const RouterView = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} {...route} />
      ))}
    </Routes>
  );
};

export default RouterView;
