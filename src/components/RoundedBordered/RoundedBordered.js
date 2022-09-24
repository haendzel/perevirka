import React from "react";
import { StyledRoundedBordered } from "./RoundedBordered.styled";

const RoundedBordered = ({ type, children, url }) => {
  return (
    <StyledRoundedBordered className={`${type}`} to={url}>
      {children}
    </StyledRoundedBordered>
  );
};

export default RoundedBordered;
