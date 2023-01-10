import styled from "styled-components";

export const StyledSidebar = styled.aside`
  transition: all 0.3s;
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  width: 350px;
  height: 100%;
  background-color: #0f0f0f;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  padding: 10px 15px;
  border-right: 3px solid var(--es-identity-color);
  transform: ${(props) =>
    props.sideOpen ? `translateX(0)` : `translateX(-110%)`};
  .sidebar-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 50px;
    svg {
      color: white;
      &:hover {
        color: var(--es-identity-color);
      }
    }
  }
  .sidebar-body {
    overflow-y: auto;
    height: calc(100% - 100px);
    padding: 5px;
    //ScrollbarStyle
    ::-webkit-scrollbar {
      width: 7px;
    }
    ::-webkit-scrollbar-track {
      background: transparent;
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background: #888;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
    .sidebar-link {
      transition: all 0.2s;
      cursor: pointer;
      display: flex;
      align-items: center;
      font-size: 15px;
      font-weight: 800;
      text-transform: uppercase;
      color: gray;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      padding: 10px 0;
      &:hover {
        color: var(--es-identity-color);
        margin-left: 3px;
      }
      svg {
        font-size: 20px;
        margin-right: 8px;
      }
    }
    .sidebar-link-dropdown {
      transition: all 0.2s;
      cursor: pointer;
      display: flex;
      align-items: center;
      font-size: 15px;
      font-weight: 800;
      text-transform: uppercase;
      color: gray;
      padding: 10px 0;
      &:hover {
        color: var(--es-identity-color);
        /* margin-left: 3px; */
      }
      svg {
        font-size: 20px;
        margin-right: 8px;
      }
      .dropdown-menu {
        background-color: transparent;
        width: 250px;
        box-shadow: none;
        border: none;
        .dropdown-item {
          transition: all 0.2s;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding: 10px 10px;
          color: gray;
          text-transform: capitalize;
          &:hover {
            background-color: transparent;
            margin-left: 3px;
            color: var(--es-identity-color);
          }
        }
      }
    }
  }
  .sidebar-footer {
    min-height: 50px;
  }
`;
