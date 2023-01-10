import styled from "styled-components";

export const StyledSocialList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  li {
    transition: all 0.2s;
    color: white;
    margin-inline: 10px;
    background-color: red;
    border-radius: 100%;
    padding: 6px;
    cursor: pointer;
    &:hover {
      color: #222222;
    }
    svg {
      font-size: 22px;
    }
    &.facebook {
      background: #3b5998;
    }
    &.twitter {
      background: #55acee;
    }
    &.instagram {
      background: #3f729b;
    }
    &.youtube {
      background: #cd201f;
    }
    &.linkedin {
      background: #0077b5;
    }
  }
`;
