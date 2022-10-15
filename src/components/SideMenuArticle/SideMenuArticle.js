import React, { useState, useEffect } from "react";
import DetailsArticle from "../DetailsArticle/DetailsArticle";
import DetailsTags from "../DetailsTags/DetailsTags";
import { DetailsWrapperArticle } from "../DetailsWrapper/DetailsWrapper.styled";
import MenuList from "../MenuList/MenuList";
import { StyledSideMenuArticle } from "./SideMenuArticle.styled";
import DetailsAboutUs from "../DetailsArticle/DetailsAboutUs";
import DetailsTab from "../DetailsTab/DetailsTab";
import { StyledDetailsTabs } from "../DetailsTabs/DetailsTabs.styled";
import { ReactComponent as SocialIcon } from "../../assets/icons/arrow-up.svg";

const SideMenuArticle = ({ changeMenuNode, activeNode, handleClick }) => {
  const [menuNode, setMenuNode] = useState(null);

  useEffect(() => {
    changeMenuNode(menuNode);
  }, [menuNode]);

  return (
    <StyledSideMenuArticle>
      <DetailsWrapperArticle>
        {menuNode?.id && (
          <>
            <DetailsTags node={activeNode} />
            <DetailsArticle node={activeNode} />
            <StyledDetailsTabs>
              <DetailsTab>
                <p>Size</p>
                <p>{activeNode?.size}</p>
              </DetailsTab>
              <DetailsTab>
                <p>Founders</p>
                <p>{activeNode?.founders}</p>
              </DetailsTab>
              <DetailsTab>
                <p>Location/s</p>
                <div className="locations">
                  {activeNode?.locations?.map((item) => (
                    <a
                      href="#"
                      className="d-inline-block social-link text-underline me-1"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </DetailsTab>
              <DetailsTab>
                <p>URL</p>
                <div className="socials">
                  {activeNode?.urls?.map((item) => (
                    <a
                      target="_blank"
                      href={item.url}
                      className="d-inline-block social-link text-underline me-1"
                    >
                      {item.title}
                      <SocialIcon className="mb-1" />
                    </a>
                  ))}
                </div>
              </DetailsTab>
              <DetailsTab>
                <p>Founded date</p>
                <p>{activeNode?.founded_date}</p>
              </DetailsTab>
            </StyledDetailsTabs>
          </>
        )}

        {menuNode === "First item" && <DetailsAboutUs />}
      </DetailsWrapperArticle>
    </StyledSideMenuArticle>
  );
};

export default SideMenuArticle;
