import React, { useEffect, useState, useRef } from "react";
import i18n from "../../i18n";
import { useTranslation } from "react-i18next";
import { StyledMenuList } from "./MenuList.styled";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { StyledButton } from "./MenuListItem/MenuListItem.styled";
import Tooltip from "react-bootstrap/Tooltip";
import RoundedBordered from "../RoundedBordered/RoundedBordered";

const MenuList = ({ changeNode, activeNode, handleClick }) => {
  const { t } = useTranslation();
  const [nodes, setNodes] = useState([]);
  const [thisNode, setThisNode] = useState({});
  const [firstTime, setFirstTime] = useState(true);
  const ref = useRef(null);
  let lng = i18n.language;

  const fetchData = () => {
    fetch(
      `https://serene-dusk-83995.herokuapp.com/api/nodes?populate=*&locale=${lng}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setNodes(data?.data);
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
    console.log("call to nodes", node);

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

    changeNode(node);
    setThisNode(node);
  };

  const getOrganizations = (node, index) => {
    var nodeStringLength = node.attributes.node_id.length;
    if (node.attributes.organization === true) {
      if (node.attributes.node_id.length > 15) {
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
              data-node={node.node_id}
              key={node.node_id}
              title={node.node_id}
              onClick={(e) => callToNodes(e, node)}
            >
              <div className="d-flex justify-start align-items-center">
                <RoundedBordered type="ml-0">
                  {index < 9 ? "0" + (index + 1) : index + 1}
                </RoundedBordered>
                <span>
                  {nodeStringLength < 16
                    ? node.attributes.node_id
                    : node.attributes.node_id.substring(
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
            key={node.attributes.node_id}
            data-node={node.attributes.node_id}
            title={node.attributes.node_id}
            onClick={(e) => callToNodes(e, node)}
          >
            <div className="d-flex justify-start align-items-center">
              <RoundedBordered type="ml-0">
                {index < 9 ? "0" + (index + 1) : index + 1}
              </RoundedBordered>
              <span>
                {nodeStringLength < 16
                  ? node.attributes.node_id
                  : node.attributes.node_id.substring(
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
    if (lng === "ua") {
      lng = "uk";
    }
    if (firstTime) {
      changeNode("First item");
      setFirstTime(false);
    }
    fetchData();
    setThisNode(activeNode);
  }, [thisNode, lng]);

  return (
    <StyledMenuList>
      <StyledButton
        className="menu-item menu-item-info active"
        active={0}
        index={0}
        ref={ref}
        key="projekt"
        title={t("about_us")}
        data-node="First item"
        onClick={(e) => handleFirstButtonClick(e, "First item")}
      >
        <div className="d-flex justify-start align-items-center">
          <RoundedBordered type="ml-0">i</RoundedBordered>
          <span>{t("about_us")}</span>
        </div>
      </StyledButton>
      {nodes.map((node, index) => getOrganizations(node, index))}
    </StyledMenuList>
  );
};

export default MenuList;
