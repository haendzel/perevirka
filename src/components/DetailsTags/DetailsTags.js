import React from "react";
import RoundedBordered from "../RoundedBordered/RoundedBordered";
import { StyledDetailsTags } from "./DetailsTags.styled";

const DetailsTags = ({ node, handleClick, changeNode }) => {
  let tags = [];
  if (node) {
    tags = node.attributes?.tags?.data;
  }
  return (
    <StyledDetailsTags className="tags">
      {tags?.map((item, index) =>
        item ? (
          <RoundedBordered
            className="tag"
            type="tag"
            key={index}
            node={item}
            data-node={item}
            handleClick={() => {
              handleClick(item);
            }}
            onClick={(item) => changeNode(item)}
          >
            {item.attributes?.name}
          </RoundedBordered>
        ) : null
      )}
    </StyledDetailsTags>
  );
};

export default DetailsTags;
