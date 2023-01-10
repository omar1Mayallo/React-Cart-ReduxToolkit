import styled from "styled-components";

export const NavIconsStyled = styled.ul`
  li {
    margin-inline: 8px;
    a {
      position: relative;
      svg {
        font-size: 25px;
      }
      span {
        color: white;
        font-size: 9px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: -2px;
        left: -3px;
        width: 20px;
        height: 20px;
        border-radius: 100%;
        background-color: red;
      }
    }
  }
`;
