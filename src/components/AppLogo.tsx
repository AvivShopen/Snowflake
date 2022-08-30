import React from "react";
import { AcUnit } from "@mui/icons-material";
import {
  responsiveGenerator,
  ResponsiveSizes,
  ResponsiveStateKeys,
} from "../store/responsiveState";
import { styled, SxProps, Theme } from "@mui/material";

type Props = {
  size?: ResponsiveStateKeys;
  className?: string;
};

const sizes: ResponsiveSizes<string> = {
  xs: "1.5rem",
  sm: "2rem",
  md: "2.5rem",
  lg: "3rem",
};

export const AppLogo = ({ size, className }: Props) => {
  const fontSize = size ? sizes[size] : sizes.md;

  return (
    <>
      <svg width={0} height={0}>
        <linearGradient
          id="linearColors"
          additive="sum"
          x1={0}
          y1={0}
          x2={1}
          y2={1}
        >
          <stop offset={0} stopColor="#0f40ff" />
          <stop offset={1} stopColor="#5ebffb" />
          <stop offset={2} stopColor="#ff5fff" />
        </linearGradient>
      </svg>
      <AcUnit
        className={className}
        sx={{
          fontSize,
          backgroundClip: "text",
          fill: "url(#linearColors)",
        }}
      />
    </>
  );
};

export const ResponsiveAppLogo = styled(AppLogo)(({ theme }) =>
  responsiveGenerator("fontSize")(theme)(sizes)
);
