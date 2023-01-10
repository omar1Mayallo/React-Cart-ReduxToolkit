import styled from "styled-components";

export const NotFoundStyled = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 75vh;
  text-align: center;
  position: relative;
  z-index: 1;
  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    font-size: calc(10vw + 10vh + 5vmin);
    font-weight: 900;
    letter-spacing: 10px;
    color: #ffffff20;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 1px #ffffff20;
  }
  h1 {
    z-index: 3;
    color: white;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: calc(3.5vw + 3.5vh + 5vmin);
    font-weight: 900;

    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 1px var(--es-identity-color);
  }
`;
