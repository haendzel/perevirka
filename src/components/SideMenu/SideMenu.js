import React, { useState, useEffect } from "react";
import DetailsArticle from "../DetailsArticle/DetailsArticle";
import DetailsTags from "../DetailsTags/DetailsTags";
import { DetailsWrapper } from "../DetailsWrapper/DetailsWrapper.styled";
import MenuList from "../MenuList/MenuList";
import { StyledSideMenu } from "./SideMenu.styled";
import DetailsTab from "../DetailsTab/DetailsTab";
import { StyledDetailsTabs } from "../DetailsTabs/DetailsTabs.styled";

const SideMenu = ({ activeNode, handleClick }) => {
  const [thisNode, setThisNode] = useState({});

  useEffect(() => {
    setThisNode(activeNode);
    console.log("side menu: ", thisNode);
  }, [activeNode]);

  return (
    <StyledSideMenu>
      <MenuList handleClick={() => handleClick()} activeNode={thisNode} />
      <DetailsWrapper>
        <DetailsTags />
        <DetailsArticle />
        <StyledDetailsTabs>
          <DetailsTab>
            <p>Size</p>
            <p>Aprox 43 active members</p>
          </DetailsTab>
          <DetailsTab>
            <p>Founders</p>
            <p>Inez Donnelly</p>
          </DetailsTab>
          <DetailsTab>
            <p>Location/s</p>
            <div className="locations">
              <span className="d-inline-block text-underline me-1">Warsaw</span>
              <span className="d-inline-block text-underline me-1">Warsaw</span>
              <span className="d-inline-block text-underline me-1">Warsaw</span>
            </div>
          </DetailsTab>
          <DetailsTab>
            <p>URL</p>
            <div className="locations">
              <span className="d-inline-block text-underline me-1">
                Discord
              </span>
              <span className="d-inline-block text-underline me-1">WWW</span>
              <span className="d-inline-block text-underline me-1">
                Instagram
              </span>
            </div>
          </DetailsTab>
          <DetailsTab>
            <p>Founded date</p>
            <p>Autumn 2021</p>
          </DetailsTab>
        </StyledDetailsTabs>
      </DetailsWrapper>
    </StyledSideMenu>
  );
};

export default SideMenu;
