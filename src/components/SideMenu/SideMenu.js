import React, { useState, useEffect } from "react";
import DetailsArticle from "../DetailsArticle/DetailsArticle";
import DetailsTags from "../DetailsTags/DetailsTags";
import { DetailsWrapper } from "../DetailsWrapper/DetailsWrapper.styled";
import MenuList from "../MenuList/MenuList";
import { StyledSideMenu } from "./SideMenu.styled";
import DetailsTab from "../DetailsTab/DetailsTab";
import { StyledDetailsTabs } from "../DetailsTabs/DetailsTabs.styled";
import { ReactComponent as SocialIcon } from "../../assets/icons/arrow-up.svg";

const SideMenu = ({ changeMenuNode, activeNode, handleClick }) => {
  const [menuNode, setMenuNode] = useState(null);

  useEffect(() => {
    changeMenuNode(menuNode);
  }, [menuNode]);

  return (
    <StyledSideMenu>
      <MenuList
        activeNode={activeNode}
        changeNode={(menuNode) => setMenuNode(menuNode)}
        handleClick={handleClick}
      />
      <DetailsWrapper>
        <DetailsTags node={activeNode} />
        { menuNode === "First item" && (
        <DetailsArticle />
        )}
        {/* <StyledDetailsTabs>
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
              <a
                href="#"
                className="d-inline-block social-link text-underline me-1"
              >
                Warsaw
              </a>
              <a
                href="#"
                className="d-inline-block social-link text-underline me-1"
              >
                Krakow
              </a>
              <a
                href="#"
                className="d-inline-block social-link text-underline me-1"
              >
                Lviv
              </a>
            </div>
          </DetailsTab>
          <DetailsTab>
            <p>URL</p>
            <div className="socials">
              <a
                target="_blank"
                href="https://discord.com/"
                className="d-inline-block social-link text-underline me-1"
              >
                Discord
                <SocialIcon className="mb-1" />
              </a>
              <a
                target="_blank"
                href="https://example.com/"
                className="d-inline-block social-link text-underline me-1"
              >
                WWW
                <SocialIcon className="mb-1" />
              </a>
              <a
                target="_blank"
                href="https://instagram.com/"
                className="d-inline-block social-link text-underline me-1"
              >
                Instagram
                <SocialIcon className="mb-1" />
              </a>
            </div>
          </DetailsTab>
          <DetailsTab>
            <p>Founded date</p>
            <p>Autumn 2021</p>
          </DetailsTab>
        </StyledDetailsTabs> */}
      </DetailsWrapper>
    </StyledSideMenu>
  );
};

export default SideMenu;
