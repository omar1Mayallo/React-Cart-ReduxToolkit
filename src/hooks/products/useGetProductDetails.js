import {getProductDetails} from "../../services/products/productsSlice";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

export const useGetProductDetails = (id) => {
  const dispatch = useDispatch();
  const {productDetails, productDetailsStatus} = useSelector(
    (state) => state.product
  );
  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [id, dispatch]);

  return [productDetails, productDetailsStatus];
};
