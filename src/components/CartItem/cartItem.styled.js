import styled from "styled-components";

export const StyledCartItemStyled = styled.div`
  padding: 5px;
  margin-bottom: 10px;
  .item-head {
    font-size: 17px;
    font-weight: bolder;
    color: var(--re-identity);
  }
  button {
    transition: all 0.3s;
    background-color: transparent;
    border: 1px solid rgba(0, 0, 0, 0.5);
    font-size: 15px;
    padding: 2px 8px;
    &:hover {
      background-color: var(--re-identity);
    }
  }
  .closeBtn {
    max-width: 30px;
  }
`;
