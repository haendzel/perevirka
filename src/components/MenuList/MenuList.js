import React, { useEffect, useState } from "react";
import MenuListItem from "./MenuListItem/MenuListItem";
import { StyledMenuList } from "./MenuList.styled";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { StyledButton } from "./MenuListItem/MenuListItem.styled";
import Tooltip from "react-bootstrap/Tooltip";
import RoundedBordered from "../RoundedBordered/RoundedBordered";

const MenuList = ({ changeNode, activeNode, handleClick }) => {
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

  const callToNodes = (node) => {
    changeNode(node);
    handleClick();
  };

  const renderTooltip = (props, title) => {
    return (
      <Tooltip id="button-tooltip" {...props}>
        {title}
      </Tooltip>
    );
  };

  const getOrganization = (node, index) => {
    var nodeStringLength = node.id.length;
    if (node.organization === true) {
      if (node.id.length > 15) {
        return (
          <OverlayTrigger
            placement="top"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip(null, node.id)}
          >
            <StyledButton
              active={checkIndex(index)}
              index={index + 1}
              key={index + 1}
              title={node.id}
              onClick={() => callToNodes(node)}
            >
              <div className="d-flex justify-start align-items-center">
                <RoundedBordered type="ml-0">
                  {index < 10 && index > 0 ? "0" + index : index}
                </RoundedBordered>
                <span>
                  {nodeStringLength < 16
                    ? node.id
                    : node.id.substring(
                        0,
                        nodeStringLength - (nodeStringLength - 14)
                      ) + "..."}
                </span>
              </div>
            </StyledButton>
          </OverlayTrigger>
        );
      } else {
        return (
          <StyledButton
            active={checkIndex(index)}
            index={index + 1}
            key={index + 1}
            title={node.id}
            onClick={() => callToNodes(node)}
          >
            <div className="d-flex justify-start align-items-center">
              <RoundedBordered type="ml-0">
                {index < 10 || index === 0 ? "0" + index : index}
              </RoundedBordered>
              <span>
                {nodeStringLength < 16
                  ? node.id
                  : node.id.substring(
                      0,
                      nodeStringLength - (nodeStringLength - 14)
                    ) + "..."}
              </span>
            </div>
          </StyledButton>
        );
      }
    } else {
      return null;
    }
  };

  useEffect(() => {
    fetchData();
    setThisNode(activeNode);
  }, [thisNode]);

  return (
    <StyledMenuList>
      <MenuListItem active={checkIndex(0) ? false : true} index="i " key={0}>
        O projekcie
      </MenuListItem>
      {nodes.map((node, index) => getOrganization(node, index + 1))}
    </StyledMenuList>
  );
};

export default MenuList;
