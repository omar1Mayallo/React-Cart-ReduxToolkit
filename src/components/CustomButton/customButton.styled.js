import styled, {css} from "styled-components";

const resetBtnStyle = css`
  transition: all 0.4s;
  background: var(--es-identity-color-2);
  color: white;
  border: none;
  padding: 2px 10px;
  font-size: 17px;
  text-transform: uppercase;
  padding: 9px 18px;
`;
const outlineBtnStyle = css`
  border: 2px solid var(--es-identity-color);
  color: var(--es-identity-color);
  font-weight: 700;
  &:hover {
    color: white;
    background-color: var(--es-identity-color);
  }
`;
const fillBtnStyle = css`
  background-color: var(--es-identity-color);
  border: 2px solid var(--es-identity-color);
  color: white;
  font-weight: 700;
  width: 100%;
  &:hover {
    color: var(--es-identity-color);
    background-color: white;
  }
`;

export const CustomButtonStyled = styled.button`
  ${resetBtnStyle}
  ${(props) => {
    switch (props.type) {
      case "outline-btn":
        return outlineBtnStyle;
      case "fill-btn":
        return fillBtnStyle;
      default:
        return;
    }
  }}
`;
