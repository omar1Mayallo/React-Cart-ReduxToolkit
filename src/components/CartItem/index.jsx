import React from "react";
import {useDispatch} from "react-redux";
import {
  decreaseQty,
  deleteFormCart,
  increaseQty,
} from "../../services/cart/cartSlice";
import {StyledCartItemStyled} from "./cartItem.styled";

const CartItem = ({item}) => {
  const dispatch = useDispatch();
  return (
    <StyledCartItemStyled className="d-flex align-items-center justify-content-between">
      <div className="d-flex flex-row align-items-center">
        <img
          src={item.thumbnail}
          alt="product-img"
          width={70}
          height={70}
          style={{objectFit: "contain"}}
        />

        <div className="d-grid gap-4 ms-2">
          <span className="item-head">{item.title}</span>
          <span className="item-qty">
            <button onClick={() => dispatch(decreaseQty(item))}>-</button>{" "}
            {item.quantity}{" "}
            <button onClick={() => dispatch(increaseQty(item))}>+</button>
          </span>
        </div>
      </div>
      <div className="d-grid gap-4">
        <button
          className="closeBtn ms-auto"
          onClick={() => dispatch(deleteFormCart(item))}
        >
          X
        </button>
        <span className="text-muted">${item.price}</span>
      </div>
    </StyledCartItemStyled>
  );
};

export default CartItem;
