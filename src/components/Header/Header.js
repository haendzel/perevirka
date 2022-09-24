import React from "react";
import { Container } from "react-bootstrap";
import LanguageButton from "../LanguageButton/LanguageButton";
import RoundedBordered from "../RoundedBordered/RoundedBordered";
import { StyledHeader } from "./Header.styled";

const Header = () => {
  return (
    <StyledHeader className="header">
      <Container className="w-100">
        <div className="d-flex align-items-center justify-content-between">
          <div className="brand d-flex justify-content-start align-items-center">
            <a href="#" className="mono-font text-uppercase fw-medium mb-0">
              перевірка/PEREVIRKA
            </a>
            <RoundedBordered>About</RoundedBordered>
            <a className="fw-medium" target="_blank" href="#">
              resistance_infratructures.txt
            </a>
          </div>
          <div className="lang-panel d-flex justify-content-start align-items-center">
            <LanguageButton active lang="en">
              EN
            </LanguageButton>
            <LanguageButton lang="ua">UA</LanguageButton>
            <LanguageButton lang="pl">PL</LanguageButton>
            <LanguageButton lang="ru">RU</LanguageButton>
          </div>
        </div>
      </Container>
    </StyledHeader>
  );
};

export default Header;
