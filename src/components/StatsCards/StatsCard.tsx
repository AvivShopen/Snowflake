import React from "react";
import { Box, Paper, styled, Typography } from "@mui/material";

const StatsCardContainer = styled(Paper)(() => ({
  display: "flex",
  flexGrow: 1,
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  padding: "5vh",
  margin: "3vw",
  borderRadius: "10px",
}));

export type StatsCardProps = {
  title: string;
  text: string;
  background: string;
};

const StatsCard = ({ title, text, background }: StatsCardProps) => {
  return (
    <StatsCardContainer sx={{ background }} elevation={3}>
      <Typography variant="h4" fontWeight="bold" mb={3}>
        {title}
      </Typography>
      <Typography variant="h6">{text}</Typography>
    </StatsCardContainer>
  );
};

export default StatsCard;
