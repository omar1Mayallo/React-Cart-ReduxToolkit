import styled from "styled-components";

export const StyledCategorySlideItem = styled.div`
  background: black;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2px;
  border-radius: 20px;
  cursor: grab;
  color: white;
  transition: all 0.3s;
  &:hover {
    background-color: rgba(0, 0, 0, 0.9);
    color: var(--es-identity-color);
  }
  span {
    font-size: 20px;
    font-weight: 800;
    text-transform: capitalize;
  }
`;
