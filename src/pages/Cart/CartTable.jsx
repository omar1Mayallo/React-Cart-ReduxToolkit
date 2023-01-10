import React from "react";
import {Alert} from "reactstrap";
import CartTableItem from "../../components/CartTableItem";
import {clearCart} from "../../services/cart/cartSlice";
import {useDispatch, useSelector} from "react-redux";
const CartTable = () => {
  const {itemsCount, totalPrice, cartItems} = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();

  return (
    <div>
      {cartItems.length > 0 ? (
        <>
          <div className="row text-center bg-light py-3">
            {["Image", "Product", "Quantity", "Delete"].map((item, idx) => (
              <div className="" style={{width: "25%"}} key={idx}>
                <h6 className="mb-0">{item}</h6>
              </div>
            ))}
          </div>
          {/* _________________________________________ */}
          {cartItems.map((item) => (
            <CartTableItem item={item} key={item.id} />
          ))}
          <div className="my-3">
            <div
              className="bg-light text-dark p-2 ms-auto"
              style={{width: "250px"}}
            >
              <span>
                Total({itemsCount} items) :{" "}
                <span className="">${totalPrice}</span>
              </span>
              <button
                className="btn btn-danger btn-sm w-100 mt-2"
                onClick={() => dispatch(clearCart())}
              >
                Clear Cart
              </button>
            </div>
          </div>
        </>
      ) : (
        <Alert color="danger">Cart Is Empty</Alert>
      )}
    </div>
  );
};

export default CartTable;
