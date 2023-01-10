import React from "react";
import {FaTrash} from "react-icons/fa";
import {Link} from "react-router-dom";
import {StyledCartTableItem} from "./cartTableItem.styled";
import {
  increaseQty,
  decreaseQty,
  deleteFormCart,
} from "../../services/cart/cartSlice";
import {useDispatch} from "react-redux";

const CartTableItem = ({item}) => {
  const dispatch = useDispatch();

  return (
    <StyledCartTableItem className="cart-table-item row text-center py-3">
      <div style={{width: "25%"}}>
        <img
          src={item?.thumbnail}
          alt="product-img"
          width="80px"
          height="80px"
          style={{objectFit: "contain"}}
        />
      </div>
      <div
        className="d-flex flex-column justify-content-around"
        style={{width: "25%"}}
      >
        <Link to={`/products/${item?.id}`}>{item?.title}</Link>
        <span className="text-muted">{item?.price}$</span>
      </div>

      <div style={{width: "25%"}}>
        <button onClick={() => dispatch(decreaseQty(item))}>-</button>{" "}
        <span>{item?.quantity} </span>
        <button onClick={() => dispatch(increaseQty(item))}>+</button>
      </div>
      <div style={{width: "25%"}}>
        <FaTrash
          color="red"
          size={20}
          cursor="pointer"
          onClick={() => dispatch(deleteFormCart(item))}
        />
      </div>
    </StyledCartTableItem>
  );
};

export default CartTableItem;
