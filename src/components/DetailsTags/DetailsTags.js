import React from "react";
import RoundedBordered from "../RoundedBordered/RoundedBordered";
import { StyledDetailsTags } from "./DetailsTags.styled";

const DetailsTags = ({node}) => {
  console.log(node.tags)
  return (
    <StyledDetailsTags className="tags">
      <RoundedBordered type="tag">transport</RoundedBordered>
      <RoundedBordered type="tag">online</RoundedBordered>
      <RoundedBordered type="tag">logistics</RoundedBordered>
    </StyledDetailsTags>
  );
};

export default DetailsTags;
