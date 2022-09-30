import React from "react";
import { Container } from "react-bootstrap";
import LanguageButton from "../LanguageButton/LanguageButton";
import RoundedBordered from "../RoundedBordered/RoundedBordered";
import { StyledHeader } from "./Header.styled";
import HeaderLink from "../HeaderLink/HeaderLink";

const Header = () => {
  return (
    <StyledHeader className="header">
      <Container className="w-100">
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center justify-content-start">
            <div className="brand">
              <a href="#" className="mono-font text-uppercase fw-medium mb-0">
                перевірка/PEREVIRKA
              </a>
            </div>
            <HeaderLink>Resistance infrastructures</HeaderLink>
          </div>
          <div className="lang-panel d-flex justify-content-start align-items-center">
            <LanguageButton lang="en">EN</LanguageButton>
            <LanguageButton lang="ua">UA</LanguageButton>
            <LanguageButton active lang="pl">
              PL
            </LanguageButton>
            <LanguageButton lang="ru">RU</LanguageButton>
          </div>
        </div>
      </Container>
    </StyledHeader>
  );
};

export default Header;
