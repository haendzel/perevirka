import React from "react";
import { StyledRoundedBordered } from "./RoundedBordered.styled";

const RoundedBordered = ({ type, children, url, handleClick, node }) => {
  return (
    <StyledRoundedBordered
      className={`${type}`}
      to={url}
      onClick={(node) => handleClick(node)}
      data-node={node}
    >
      {children}
    </StyledRoundedBordered>
  );
};

export default RoundedBordered;
