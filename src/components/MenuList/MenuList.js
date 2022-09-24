import React, { useEffect, useState } from "react";
import MenuListItem from "./MenuListItem/MenuListItem";
import { StyledMenuList } from "./MenuList.styled";

const MenuList = () => {
  let objectItems = {};
  let nodesArray = [];
  const [nodes, setNodes] = useState(null);

  useEffect(() => {
    fetch("miserables.json")
      .then((res) => res.json())
      .then((data) => {
        objectItems = data;
        nodesArray = objectItems.nodes;
        setNodes(nodesArray);
        console.log(nodesArray);
      });
  }, []);

  return (
    <StyledMenuList>
      {nodesArray.map(function (node, index) {
        return (
          <MenuListItem index={index + 1} key={index + 1}>
            {node.id}
          </MenuListItem>
        );
      })}
    </StyledMenuList>
  );
};

export default MenuList;
