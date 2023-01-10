import styled from "styled-components";

export const StyledCartTableItem = styled.div`
  font-size: 14px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  button {
    background: none;
    transition: all 0.3s;
    border: 1px solid rgba(0, 0, 0, 0.2);
    font-size: 13px;
    padding: 2px 8px;
    &:hover {
      border: 1px solid rgba(0, 0, 0, 0.8);
    }
  }
  a {
    transition: all 0.2s;
    color: black;
    font-weight: 900;
    &:hover {
      color: var(--re-identity);
    }
  }
`;
