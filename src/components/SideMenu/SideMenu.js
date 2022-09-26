import React, { useState, useEffect } from "react";
import MenuList from "../MenuList/MenuList";
import { StyledSideMenu } from "./SideMenu.styled";

const SideMenu = ({ activeNode, handleClick }) => {
  const [thisNode, setThisNode] = useState({});

  useEffect(() => {
    setThisNode(activeNode);
    console.log("side menu: ", thisNode);
  }, [activeNode]);

  return (
    <StyledSideMenu>
      <MenuList handleClick={() => handleClick()} activeNode={thisNode} />
    </StyledSideMenu>
  );
};

export default SideMenu;
