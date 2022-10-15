import React from "react";
import { StyledLanguageButton } from "./LanguageButton.styled";

const LanguageButton = ({ children, lang, active, handleClick }) => {
  return (
    <StyledLanguageButton
      className={active ? "is-active" : null}
      language={lang}
      onClick={handleClick}
    >
      {children}
    </StyledLanguageButton>
  );
};

export default LanguageButton;
