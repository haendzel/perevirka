import React, { useState, useEffect } from "react";
import MenuList from "../MenuList/MenuList";
import { StyledSideMenu } from "./SideMenu.styled";

const SideMenu = ({ activeNode }) => {
  const [thisNode, setThisNode] = useState({});

  useEffect(() => {
    setThisNode(activeNode);
  }, [activeNode]);

  return (
    <StyledSideMenu>
      <MenuList activeNode={thisNode} />
    </StyledSideMenu>
  );
};

export default SideMenu;
