import React, { forwardRef } from "react";
import { StyledMenuListItem } from "./MenuListItem.styled";
import RoundedBordered from "../../RoundedBordered/RoundedBordered";

const handleButtonClick = () => {
  const activeButtons = document.querySelectorAll(".menu-item.is-active");

  activeButtons.forEach((btn) => {
    btn.classList.remove("is-active");
  });

  document.querySelector(".menu-item-info").classList.add("is-active");
};

const MenuListItem = forwardRef(({ index, children, active, item }, ref) => (
  <StyledMenuListItem
    menuRef={ref}
    className={active ? "menu-item menu-item-info is-active" : "menu-item-info"}
    onClick={() => handleButtonClick()}
    item={item}
  >
    <div className="d-flex justify-start align-items-center">
      <RoundedBordered type="ml-0">
        {index < 10 || index === 0 ? "0" + index : index}
      </RoundedBordered>
      <span>{children}</span>
    </div>
  </StyledMenuListItem>
));

export default MenuListItem;
