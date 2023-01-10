import styled, {css} from "styled-components";

const onScrollNav = css`
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: #0f0f0f;
  box-shadow: rgb(0 0 0 / 5%) 0px 6px 24px 0px, rgb(0 0 0 / 8%) 0px 0px 0px 1px;
  nav {
    padding: 0px;
  }
  a.nav-link {
    color: white;
  }
`;
const regularNav = css`
  transition: all 0.4s ease-in-out;
  background-color: transparent;
  nav {
    transition: all 0.4s;
    padding: 3px;
  }
  a.nav-link {
    text-transform: uppercase;
    font-size: 14px;
    color: gray;
    &.active {
      color: var(--es-identity-color);
    }
  }
  .menu-icon {
    @media (min-width: 768px) {
      display: none;
    }
    cursor: pointer;
    font-size: 50px;
    margin-right: 10px;
    padding: 8px;
    color: gray;
    border: 1px solid gray;
    border-radius: 100%;
    &:hover {
      background: rgba(255, 255, 255, 0.1);
    }
  }
  ${(props) => {
    if (props.headerStyleChanged) {
      return onScrollNav;
    }
  }}
`;
const homeNav = css`
  ${regularNav}
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 10;

  a.nav-link {
    color: white;
    &.active {
      color: var(--es-identity-color);
    }
  }
`;

export const HeaderStyled = styled.header`
  ${(props) => {
    switch (props.isHomePg) {
      case true:
        return homeNav;
      default:
        return regularNav;
    }
  }}
  .dropdown-toggle {
    color: gray;
    &[aria-expanded="true"] {
      color: darkgrey;
    }
  }
  .dropdown-menu {
    min-width: 300px;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    border: 1px solid rgba(255, 255, 255, 0.4);
    .dropdown-item {
      text-transform: capitalize;
      font-size: 13px;
    }
  }
`;
