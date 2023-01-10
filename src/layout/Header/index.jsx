import React from "react";
import logo from "../../assets/logo.png";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Row,
  Col,
} from "reactstrap";
import {NavLink, useNavigate} from "react-router-dom";
import NavIcons from "../../components/NavIcons";
import {HeaderStyled} from "./header.styled";
import {RiMenu5Line} from "react-icons/ri";
import {useLocation} from "react-router-dom";
import {useChangeHeaderStyleOnScroll} from "../../hooks/header/useChangeHeaderStyleOnScroll";
import {useDispatch} from "react-redux";
import {toggleSidebar} from "../../services/sidebar/sidebarSlice";
import LoadingSpinner from "../../components/LoadingSpinner";
import {ASYNC_STATUS} from "../../utils/constants";
import {useGetAllCategories} from "../../hooks/categories/useGetAllCategories";

const Header = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const headerStyleChanged = useChangeHeaderStyleOnScroll();
  const [categories, categoriesStatus] = useGetAllCategories();

  return (
    <HeaderStyled
      isHomePg={location.pathname === "/" || location.pathname === "/signin"}
      headerStyleChanged={headerStyleChanged}
    >
      <Container>
        <Navbar expand={"md"}>
          <div>
            <RiMenu5Line
              className="menu-icon"
              onClick={() => dispatch(toggleSidebar())}
            />
            <NavbarBrand>
              <img
                alt="logo"
                src={logo}
                style={{
                  height: 70,
                  width: 70,
                }}
              />
            </NavbarBrand>
          </div>

          <div className="d-flex align-items-center">
            <NavIcons ulClass="d-md-none d-flex flex-row" />
          </div>

          <Nav className="me-auto d-md-flex flex-row d-none" navbar>
            <NavItem>
              <NavLink className="nav-link" to={"/"}>
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to={"/shop"}>
                Shop
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                categories
              </DropdownToggle>
              <DropdownMenu end dark>
                <Container>
                  <Row>
                    {categoriesStatus === ASYNC_STATUS.PENDING ? (
                      <LoadingSpinner verticalMargin={30} />
                    ) : (
                      <>
                        <Col sm={6}>
                          {categories
                            .filter((_, idx) => idx < 10)
                            .map((catItem, idx) => (
                              <DropdownItem
                                key={idx}
                                onClick={() =>
                                  navigate(`/categories/${catItem}`)
                                }
                              >
                                {catItem.replace("-", " ")}
                              </DropdownItem>
                            ))}
                        </Col>
                        <Col sm={6}>
                          {categories
                            .filter((_, idx) => idx >= 10)
                            .map((catItem, idx) => (
                              <DropdownItem
                                key={idx}
                                onClick={() =>
                                  navigate(`/categories/${catItem}`)
                                }
                              >
                                {catItem.replace("-", " ")}
                              </DropdownItem>
                            ))}
                        </Col>
                      </>
                    )}
                  </Row>
                </Container>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavIcons ulClass="d-md-flex d-none" />
        </Navbar>
      </Container>
    </HeaderStyled>
  );
};

export default Header;
