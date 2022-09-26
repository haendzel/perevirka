import React from "react";
import { StyledDetailsTab } from "./DetailsTab.styled";

const DetailsTab = ({ children }) => {
  return <StyledDetailsTab className="tab">{children}</StyledDetailsTab>;
};

export default DetailsTab;
