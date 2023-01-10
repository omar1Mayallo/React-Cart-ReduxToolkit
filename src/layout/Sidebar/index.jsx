import React from "react";
import {StyledSidebar} from "./sidebar.styled";
import logo from "../../assets/logo.png";
import {MdOutlineClose} from "react-icons/md";
import {LinkContainer} from "react-router-bootstrap";
import {FaHome} from "react-icons/fa";
import {AiTwotoneShop} from "react-icons/ai";
import {BiCategory} from "react-icons/bi";
import SocialList from "../../components/SocialList";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";
import {useSelector, useDispatch} from "react-redux";
import {toggleSidebar} from "../../services/sidebar/sidebarSlice";
import LoadingSpinner from "../../components/LoadingSpinner";
import {ASYNC_STATUS} from "../../utils/constants";
import {useNavigate} from "react-router-dom";

const SideBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {sideOpen} = useSelector((state) => state.sidebar);
  const {categories, categoriesStatus} = useSelector((state) => state.category);
  return (
    <StyledSidebar sideOpen={sideOpen}>
      <div className="sidebar-head">
        <img src={logo} alt="logo-img" width={50} />
        <MdOutlineClose
          size={25}
          cursor={"pointer"}
          onClick={() => dispatch(toggleSidebar())}
        />
      </div>
      <div className="sidebar-body">
        <LinkContainer to="/">
          <div
            className="sidebar-link"
            onClick={() => dispatch(toggleSidebar())}
          >
            <FaHome /> <span>Home</span>
          </div>
        </LinkContainer>
        <LinkContainer to="/shop">
          <div
            className="sidebar-link"
            onClick={() => dispatch(toggleSidebar())}
          >
            <AiTwotoneShop /> <span>Shop</span>
          </div>
        </LinkContainer>

        <div className="sidebar-link-dropdown">
          <UncontrolledDropdown inNavbar>
            <DropdownToggle nav caret>
              <BiCategory />
              <span>categories</span>
            </DropdownToggle>
            <DropdownMenu end>
              {categoriesStatus === ASYNC_STATUS.PENDING ? (
                <LoadingSpinner verticalMargin={30} />
              ) : (
                <>
                  {categories.map((catItem, idx) => (
                    <DropdownItem
                      key={idx}
                      onClick={() => {
                        dispatch(toggleSidebar());
                        navigate(`/categories/${catItem}`);
                      }}
                    >
                      {catItem.replace("-", " ")}
                    </DropdownItem>
                  ))}
                </>
              )}
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
      </div>
      <div className="sidebar-footer mt-2">
        <SocialList />
      </div>
    </StyledSidebar>
  );
};

export default SideBar;
