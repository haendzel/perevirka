import React, { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
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
  const [navbarOpen, setNavbarOpen] = useState(false);

  const [lang, setLang] = useState("en");

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  useEffect(() => {
    setLang(i18n.language);
  }, [lang]);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    localStorage.setItem("selectedLanguage", lng);
    i18n.changeLanguage(lng);
  };

  return (
    <>
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
                className="d-none d-xl-block"
                to="/essay"
                activeClassName="is-active-header-tab"
              >
                <HeaderLink className="header-link">{t("essay")}</HeaderLink>
              </NavLink>
            </div>
            <button
              className="d-block d-xl-none navBarButton"
              onClick={handleToggle}
            >
              {navbarOpen ? (
                <MdClose style={{ width: "25px", height: "25px" }} />
              ) : (
                <FiMenu style={{ width: "25px", height: "25px" }} />
              )}
            </button>
            <div className="lang-panel d-none d-xl-flex justify-content-start align-items-center">
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
      <ul
        className={`menuNav d-block d-xl-none ${navbarOpen ? " showMenu" : ""}`}
      >
        <div className="lang-panel justify-content-center mt-6 mb-3 align-items-center">
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
        <li>
          <NavLink
            to="/essay"
            activeClassName="is-active-header-tab"
            onClick={() => closeMenu()}
          >
            <HeaderLink className="header-link">{t("essay")}</HeaderLink>
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Header;
