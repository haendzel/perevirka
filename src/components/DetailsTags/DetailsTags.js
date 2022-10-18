import React from "react";
import RoundedBordered from "../RoundedBordered/RoundedBordered";
import { StyledDetailsTags } from "./DetailsTags.styled";

const DetailsTags = ({ node }) => {
  console.log("from details tags", node?.attributes);
  let tags = [];
  if (node) {
    tags = node.attributes.tags.data;
  }
  return (
    <StyledDetailsTags className="tags">
      {tags?.map((item, index) => (
        <RoundedBordered type="tag" key={index}>
          {item.attributes.name}
        </RoundedBordered>
      ))}
    </StyledDetailsTags>
  );
};

export default DetailsTags;
