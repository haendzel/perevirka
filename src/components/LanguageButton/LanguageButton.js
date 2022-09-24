import React from "react";
import { StyledLanguageButton } from "./LanguageButton.styled";

const LanguageButton = ({ children, lang, active }) => {
  return (
    <StyledLanguageButton
      className={active ? "is-active" : null}
      language={lang}
    >
      {children}
    </StyledLanguageButton>
  );
};

export default LanguageButton;
