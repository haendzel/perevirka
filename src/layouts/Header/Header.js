import React, { useEffect, useState } from "react";
import i18n from "../../i18n";
import { useTranslation } from "react-i18next";
import { Container } from "react-bootstrap";
import LanguageButton from "../../components/LanguageButton/LanguageButton";
import { StyledHeader } from "./Header.styled";
import HeaderLink from "../../components/HeaderLink/HeaderLink";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const [lang, setLang] = useState("en");

  useEffect(() => {
    setLang(i18n.language);
  }, [lang]);

  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    console.log(lng);
    i18n.changeLanguage(lng);
  };

  return (
    <StyledHeader className="header">
      <Container className="w-100">
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center justify-content-start">
            <div className="brand">
              <NavLink
                to="/"
                className="mono-font text-uppercase fw-medium mb-0"
              >
                перевірка/PEREVIRKA
              </NavLink>
            </div>
            <NavLink
              to="/resistance-infrastructures"
              activeClassName="is-active-header-tab"
            >
              <HeaderLink className="header-link">{t("resistance")}</HeaderLink>
            </NavLink>
          </div>
          <div className="lang-panel d-flex justify-content-start align-items-center">
            <LanguageButton
              lang="en"
              active={i18n.language === "en" ? true : false}
              handleClick={() => changeLanguage("en")}
            >
              EN
            </LanguageButton>
            <LanguageButton
              lang="ua"
              active={i18n.language === "ua" ? true : false}
              handleClick={() => changeLanguage("ua")}
            >
              UA
            </LanguageButton>
            <LanguageButton
              lang="pl"
              active={i18n.language === "pl" ? true : false}
              handleClick={() => changeLanguage("pl")}
            >
              PL
            </LanguageButton>
            <LanguageButton
              lang="ru"
              active={i18n.language === "ru" ? true : false}
              handleClick={() => changeLanguage("ru")}
            >
              RU
            </LanguageButton>
          </div>
        </div>
      </Container>
    </StyledHeader>
  );
};

export default Header;
