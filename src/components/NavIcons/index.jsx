/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {FaSearch, FaShoppingBag} from "react-icons/fa";
import {BsPersonFill} from "react-icons/bs";
import {BiLogOut} from "react-icons/bi";
import {NavIconsStyled} from "./navIcons.styled";
import {NavLink} from "react-router-dom";
import {toggleSearchModal} from "../../services/searchModal/searchModalSlice";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../services/auth/authSlice";
import {toggleCartSidebar} from "../../services/cartSidebar/cartSidebarSlice";

const NavIcons = ({ulClass}) => {
  const dispatch = useDispatch();
  const {userInfo} = useSelector((state) => state.auth);
  const {itemsCount} = useSelector((state) => state.cart);
  return (
    <NavIconsStyled className={`navbar-nav ${ulClass}`}>
      <li>
        <a className="nav-link">
          <FaSearch
            onClick={() => dispatch(toggleSearchModal())}
            cursor={"pointer"}
          />
        </a>
      </li>
      <li>
        <a className="nav-link">
          <FaShoppingBag
            cursor={"pointer"}
            onClick={() => dispatch(toggleCartSidebar())}
          />
          <span className="item-num">{itemsCount}</span>
        </a>
      </li>
      <li>
        {!userInfo ? (
          <NavLink className="nav-link" to={"/signin"}>
            <BsPersonFill />
          </NavLink>
        ) : (
          <>
            <a className="nav-link">
              <BiLogOut onClick={() => dispatch(logout())} cursor={"pointer"} />
            </a>
          </>
        )}
      </li>
    </NavIconsStyled>
  );
};

export default NavIcons;
