import React from "react";
import {CustomButtonStyled} from "./customButton.styled";

const CustomButton = ({handleClick, type, children}) => {
  return (
    <CustomButtonStyled type={type} onClick={handleClick}>
      {children}
    </CustomButtonStyled>
  );
};

export default CustomButton;
