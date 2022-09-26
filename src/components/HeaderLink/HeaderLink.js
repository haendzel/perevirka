import React from "react";
import { StyledHeaderLink } from "./HeaderLink.styled";

const HeaderLink = ({ children, active }) => {
  return (
    <StyledHeaderLink className={active ? "is-active" : null}>
      {children}
    </StyledHeaderLink>
  );
};

export default HeaderLink;
