import React from "react";
import { StyledMenuListItem } from "./MenuListItem.styled";
import RoundedBordered from "../../RoundedBordered/RoundedBordered";

const MenuListItem = ({ index, children, active, item }) => {
  return (
    <StyledMenuListItem className={active ? "is-active" : null} item={item}>
      <div className="d-flex justify-start align-items-center">
        <RoundedBordered type="ml-0">
          {index < 10 || index === 0 ? "0" + index : index}
        </RoundedBordered>
        <span>{children}</span>
      </div>
    </StyledMenuListItem>
  );
};

export default MenuListItem;
