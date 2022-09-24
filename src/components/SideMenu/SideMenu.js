import React from "react";
import MenuList from "../MenuList/MenuList";
import { StyledSideMenu } from "./SideMenu.styled";

const SideMenu = () => {
  return (
    <StyledSideMenu>
      <MenuList />
    </StyledSideMenu>
  );
};

export default SideMenu;
