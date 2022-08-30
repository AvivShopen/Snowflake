import { Typography } from "@mui/material";
import React, { useRef } from "react";
import useLazy from "../../hooks/useLazy";
import { SectionContainer } from "./SectionContainer";

const DevelopSection = () => {
  const sectionRef = useRef<HTMLElement>();

  const developSectionEl = <Typography>Faster Development</Typography>;

  const developSection = useLazy(sectionRef, developSectionEl);

  return <SectionContainer ref={sectionRef}>{developSection}</SectionContainer>;
};

export default DevelopSection;
