import React, { useEffect, useState, useRef } from "react";
import { StyledMenuList } from "./MenuList.styled";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { StyledButton } from "./MenuListItem/MenuListItem.styled";
import Tooltip from "react-bootstrap/Tooltip";
import RoundedBordered from "../RoundedBordered/RoundedBordered";

const MenuList = ({ changeNode, activeNode, handleClick }) => {
  const [nodes, setNodes] = useState([]);
  const [thisNode, setThisNode] = useState({});
  const ref = useRef(null);

  const fetchData = () => {
    fetch("https://haendzel.github.io/perevirka/miserables.json")
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

  const callToNodes = (e, node) => {
    const activeButtons = document.querySelectorAll(".menu-item.active");

    activeButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    e.target.parentElement.classList.add("active");

    changeNode(node);
    setThisNode(node);
    handleClick();
  };

  const renderTooltip = (props, title) => {
    return (
      <Tooltip id="button-tooltip" {...props}>
        {title}
      </Tooltip>
    );
  };

  const handleFirstButtonClick = (e, node) => {
    const activeButtons = document.querySelectorAll(".menu-item.active");

    activeButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    e.target.parentElement.classList.add("active");

    changeNode(node);
    setThisNode(node);
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
            key={node.id}
          >
            <StyledButton
              className="menu-item"
              active={checkIndex(index)}
              index={index + 1}
              ref={ref}
              data-node={node.id}
              key={node.id}
              title={node.id}
              onClick={(e) => callToNodes(e, node)}
            >
              <div className="d-flex justify-start align-items-center">
                <RoundedBordered type="ml-0">
                  {index < 9 ? "0" + (index + 1) : index + 1}
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
            className="menu-item"
            active={checkIndex(index)}
            index={index + 1}
            ref={ref}
            key={node.id}
            data-node={node.id}
            title={node.id}
            onClick={(e) => callToNodes(e, node)}
          >
            <div className="d-flex justify-start align-items-center">
              <RoundedBordered type="ml-0">
                {index < 9 ? "0" + (index + 1) : index + 1}
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
      <StyledButton
        className="menu-item menu-item-info active"
        index={0}
        ref={ref}
        key="projekt"
        title="O projekcie"
        data-node="O projekcie"
        onClick={(e) => handleFirstButtonClick(e, "First item")}
      >
        <div className="d-flex justify-start align-items-center">
          <RoundedBordered type="ml-0">i</RoundedBordered>
          <span>O projekcie</span>
        </div>
      </StyledButton>
      {nodes.map((node, index) => getOrganization(node, index))}
    </StyledMenuList>
  );
};

export default MenuList;
