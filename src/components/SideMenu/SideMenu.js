import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import DetailsArticle from "../DetailsArticle/DetailsArticle";
import DetailsTags from "../DetailsTags/DetailsTags";
import { DetailsWrapper } from "../DetailsWrapper/DetailsWrapper.styled";
import MenuList from "../MenuList/MenuList";
import { StyledSideMenu } from "./SideMenu.styled";
import DetailsAboutUs from "../DetailsArticle/DetailsAboutUs";
import DetailsTab from "../DetailsTab/DetailsTab";
import { StyledDetailsTabs } from "../DetailsTabs/DetailsTabs.styled";
import { ReactComponent as SocialIcon } from "../../assets/icons/arrow-up.svg";

const SideMenu = ({ changeMenuNode, activeNode, handleClick }) => {
  const [menuNode, setMenuNode] = useState(null);
  const { t, i18n, ready } = useTranslation();
  useEffect(() => {
    changeMenuNode(menuNode);
  }, [menuNode]);

  if (ready) {
    return (
      <StyledSideMenu>
        <MenuList
          activeNode={activeNode}
          changeNode={(menuNode) => setMenuNode(menuNode)}
          handleClick={handleClick}
        />
        <DetailsWrapper>
          {menuNode?.id && (
            <>
              <DetailsTags node={activeNode} />
              <DetailsArticle node={activeNode} />
              <StyledDetailsTabs>
                <DetailsTab>
                  <p className="fw-medium">{t("size")}</p>
                  <p>{activeNode?.size}</p>
                </DetailsTab>
                <DetailsTab>
                  <p className="fw-medium">{t("founders")}</p>
                  <p>{activeNode?.founders}</p>
                </DetailsTab>
                <DetailsTab>
                  <p className="fw-medium">{t("locations")}</p>
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
                  <p className="fw-medium">{t("url")}</p>
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
                  <p className="fw-medium">{t("founded_date")}</p>
                  <p>{activeNode?.founded_date}</p>
                </DetailsTab>
              </StyledDetailsTabs>
            </>
          )}

          {menuNode === "First item" && <DetailsAboutUs />}
        </DetailsWrapper>
      </StyledSideMenu>
    );
  }
};

export default SideMenu;
