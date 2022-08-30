import { Breakpoint, SxProps, Theme } from "@mui/material";
import { CSSProperties } from "react";
import { atom } from "recoil";

export type ResponsiveState = {
  [K in Exclude<Breakpoint, "xl">]: boolean;
};

export type ResponsiveStateKeys = keyof ResponsiveState;

export type ResponsiveSizes<T> = { [K in ResponsiveStateKeys]: T };

type CssProperty = keyof CSSProperties;

export const responsiveGenerator =
  (property: CssProperty) =>
  (theme: Theme) =>
  (propertySizes: ResponsiveSizes<string>) => {
    const breakpoints: { [key: string]: CSSProperties } = {};

    Object.entries(propertySizes).forEach(([key, propertySize]) => {
      breakpoints[theme.breakpoints.up(key as ResponsiveStateKeys)] = {
        [property]: propertySize,
      };
    });

    return breakpoints;
  };

export default atom({
  key: "responsiveState",
  default: {
    xs: false,
    sm: false,
    md: false,
    lg: false,
  } as ResponsiveState,
});
