import React from "react";
import { Container } from "react-bootstrap";
import { StyledFooter } from "./Footer.styled";

const Footer = () => {
  return (
    <StyledFooter className="footer">
      <Container className="w-100">
        <div className="d-flex justify-content-between align-items-center">
          <span>
            Except where otherwise noted, content on this site is licensed under
            a Creative Commons Attribution 4.0 International license.
          </span>
          <a href="#" className="inter-font fw-medium mb-0">
            NERDKA {new Date().getFullYear()}
          </a>
        </div>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
