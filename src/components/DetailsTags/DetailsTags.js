import React from "react";
import RoundedBordered from "../RoundedBordered/RoundedBordered";
import { StyledDetailsTags } from "./DetailsTags.styled";

const DetailsTags = ({node}) => {
  console.log(node)
  let tags = [];
  if(node) {
    tags = node.tags
  }
  return (
    
    <StyledDetailsTags className="tags">
      {tags?.map(item =>
      <RoundedBordered type="tag">{item}</RoundedBordered>
      )}
    </StyledDetailsTags>
  );
};

export default DetailsTags;
