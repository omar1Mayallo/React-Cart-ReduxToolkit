import styled from "styled-components";

export const StyledProductItem = styled.div`
  background: white;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  margin-bottom: 15px;
  position: relative;
  overflow: hidden;
  position: relative;
  z-index: 1;
  max-width: 370px;
  @media (max-width: 576px) {
    margin-inline: auto;
  }

  .discount-box {
    position: absolute;
    z-index: 2;
    top: 10px;
    left: -50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
    color: red;
    min-width: 150px;
    padding: 5px;
    font-size: 12px;
    transform: rotate(317deg);
  }
  .rating-box {
    position: absolute;
    z-index: 2;
    top: 8px;
    right: -50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--es-identity-color);
    color: white;
    min-width: 150px;
    padding: 5px;
    font-size: 12px;
    transform: rotate(45deg);
    svg {
      font-size: 15px;
      margin-bottom: 2px;
    }
  }
  .icon-box {
    transition: all 0.5s;
    position: absolute;
    z-index: 3;
    bottom: 0;
    right: 0;
    transform: translate(0%, 0%);

    svg {
      box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
        rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
      background-color: white;
      color: black;
      padding: 3px;
      font-size: 30px;
      cursor: pointer;
      &:hover {
        color: var(--es-identity-color);
      }
    }
  }
  .img-box {
    text-align: center;
    img {
      object-fit: contain;
    }
  }

  .details-box {
    padding: 10px;
    h4 {
      font-size: 18px;
      font-weight: 800;
      color: #000;
      cursor: pointer;
      &:hover {
        color: var(--es-identity-color);
      }
    }
    .price {
      color: var(--es-identity-color);
      margin-right: 10px;
    }
  }
`;
