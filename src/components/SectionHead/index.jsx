import React from "react";
import {StyledSectionHead} from "./sectionHead.styled";

const SectionHead = ({head}) => {
  return (
    <StyledSectionHead className="mb-4">
      <h3>{head.toUpperCase()}</h3>
    </StyledSectionHead>
  );
};

export default SectionHead;
