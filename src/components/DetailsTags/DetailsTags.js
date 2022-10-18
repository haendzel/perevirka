import React from "react";
import RoundedBordered from "../RoundedBordered/RoundedBordered";
import { StyledDetailsTags } from "./DetailsTags.styled";

const DetailsTags = ({ node, handleClick }) => {
  let tags = [];
  if (node) {
    tags = node.attributes?.tags?.data;
  }
  return (
    <StyledDetailsTags className="tags">
      {tags?.map((item, index) => (
        <RoundedBordered
          type="tag"
          key={index}
          node={item.attributes?.name}
          data-node={item.attributes?.name}
          handleClick={handleClick}
        >
          {item.attributes?.name}
        </RoundedBordered>
      ))}
    </StyledDetailsTags>
  );
};

export default DetailsTags;
