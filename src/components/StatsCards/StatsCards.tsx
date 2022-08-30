import { Box, Stack } from "@mui/material";
import React from "react";
import StatsCard, { StatsCardProps } from "./StatsCard";

const StatsCards = () => {
  const cards: StatsCardProps[] = [
    {
      title: "Faster Development",
      text: "Receive real-time code completion and code validation.",
      background: "#40C85366",
    },
    {
      title: "Full-featured IDE",
      text: "Comes with an advanced debugger, code linting, and much more.",
      background: "#5ebffb66",
    },
    {
      title: "Enterprise-ready",
      text: "Built for enterprise projects with a powerful plugin system.",
      background: "#ff5fff66",
    },
  ];
  return (
    <Stack direction="row" width="100%">
      {cards.map((cardProps) => (
        <StatsCard key={cardProps.title} {...cardProps} />
      ))}
    </Stack>
  );
};

export default StatsCards;
