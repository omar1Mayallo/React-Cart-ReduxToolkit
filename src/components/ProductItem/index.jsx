import React from "react";
import {StyledProductItem} from "./productItem.styled";
import {TiStarFullOutline} from "react-icons/ti";
import {AiOutlineShoppingCart} from "react-icons/ai";
import {useNavigate} from "react-router-dom";
import {increaseQty} from "../../services/cart/cartSlice";
import {useDispatch} from "react-redux";
const ProductItem = ({item}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {thumbnail, price, title, discountPercentage, rating, id} = item;

  return (
    <StyledProductItem>
      <div className="discount-box">
        <span>%{discountPercentage} -</span>
      </div>
      <div className="rating-box">
        <span>{rating} </span>
        <TiStarFullOutline />
      </div>
      <div className="icon-box">
        <AiOutlineShoppingCart onClick={() => dispatch(increaseQty(item))} />
      </div>
      <div className="img-box">
        <img src={thumbnail} alt="product-img" width="200px" height="180px" />
      </div>
      <div className="details-box">
        <h4
          style={{cursor: "pointer"}}
          onClick={() => navigate(`/products/${id}`)}
        >
          {title}
        </h4>
        <span className="price">${price}</span>
        <span className="text-muted text-decoration-line-through">
          ${Math.ceil((price * discountPercentage) / 100 + price)}
        </span>
      </div>
    </StyledProductItem>
  );
};

export default ProductItem;
