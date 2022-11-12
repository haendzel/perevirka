import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import DetailsArticle from "../DetailsArticle/DetailsArticle";
import "../../i18n";
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
  const [aboutUs, setAboutUs] = useState(null);
  const { t, i18n, ready } = useTranslation();
  let lng = i18n.language;

  console.log(lng);

  const fetchAboutUs = () => {
    fetch(
      `https://serene-dusk-83995.herokuapp.com/api/about-us?populate=*&locale=${lng}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setAboutUs(data?.data);
      });
  };

  useEffect(() => {
    if (lng === "ua") {
      lng = "uk";
    }
    fetchAboutUs();
    changeMenuNode(menuNode);
  }, [lng, menuNode]);

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
              <DetailsTags node={activeNode} handleClick={handleClick} />
              <DetailsArticle node={activeNode} />
              <StyledDetailsTabs>
                <DetailsTab>
                  <p className="fw-medium">{t("size")}</p>
                  <p>{activeNode?.attributes?.size}</p>
                </DetailsTab>
                <DetailsTab>
                  <p className="fw-medium">{t("founders")}</p>
                  <p class="people-p">{activeNode?.attributes?.founders}</p>
                </DetailsTab>
                <DetailsTab>
                  <p className="fw-medium">{t("locations")}</p>
                  <div className="locations">
                    {activeNode?.attributes?.tags?.data.map((item, index) => {
                      return item.attributes.tag ? null : (
                        <a
                          href="#"
                          className="d-inline-block social-link text-underline me-1"
                          key={index}
                        >
                          {item.attributes?.name}
                        </a>
                      );
                    })}
                  </div>
                </DetailsTab>
                <DetailsTab>
                  <p className="fw-medium">{t("url")}</p>
                  <div className="socials">
                    {activeNode?.attributes?.URL?.map((item, index) => (
                      <a
                        target="_blank"
                        key={index}
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
                  <p>{activeNode?.attributes?.founded_date}</p>
                </DetailsTab>
              </StyledDetailsTabs>
            </>
          )}

          {menuNode === "First item" && <DetailsAboutUs aboutUs={aboutUs} />}
        </DetailsWrapper>
      </StyledSideMenu>
    );
  }
};

export default SideMenu;
