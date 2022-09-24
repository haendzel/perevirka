import React from "react";
import { Container } from "react-bootstrap";
import { StyledFooter } from "./Footer.styled";

const Header = () => {
  return (
    <StyledFooter className="header">
      <Container className="w-100">
        <div className="d-flex justify-content-center align-items-center">
          <a href="#" className="mono-font mb-0">
            NERDKA {new Date().getFullYear()}
          </a>
        </div>
      </Container>
    </StyledFooter>
  );
};

export default Header;
