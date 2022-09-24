import React from "react";
import { StyledRoundedBordered } from "./RoundedBordered.styled";
import { StyledSideFrame } from "./SideFrame.styled";

const SideFrame = ({ right, left }) => {
  return <StyledSideFrame left={left} right={right} />;
};

export default SideFrame;
