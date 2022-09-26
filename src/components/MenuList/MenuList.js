import React, { useEffect, useState } from "react";
import MenuListItem from "./MenuListItem/MenuListItem";
import { StyledMenuList } from "./MenuList.styled";

const MenuList = ({ activeNode, handleClick }) => {
  const [nodes, setNodes] = useState([]);
  const [thisNode, setThisNode] = useState({});

  const fetchData = () => {
    fetch("miserables.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setNodes(data.nodes);
      });
  };

  const checkIndex = (index) => {
    if (activeNode !== null) {
      if (index === activeNode.index) {
        return true;
      } else {
        return false;
      }
    }
  };

  useEffect(() => {
    fetchData();
    setThisNode(activeNode);
    console.log("menu list:", thisNode);
  }, [thisNode]);

  return (
    <StyledMenuList>
      {nodes.map((node, index) => (
        <MenuListItem
          active={checkIndex(index)}
          index={index + 1}
          key={index + 1}
          onClick={() => handleClick()}
        >
          {node.id}
        </MenuListItem>
      ))}
    </StyledMenuList>
  );
};

export default MenuList;
