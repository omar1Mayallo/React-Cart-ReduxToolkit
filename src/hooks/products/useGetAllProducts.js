import {getAllProducts} from "../../services/products/productsSlice";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

export const useGetAllProducts = () => {
  const dispatch = useDispatch();
  const {products, productsStatus} = useSelector((state) => state.product);
  let limit = 10;
  useEffect(() => {
    dispatch(getAllProducts(`limit=${limit}`));
  }, [limit, dispatch]);

  const handlePagination = (skip = 0) => {
    dispatch(getAllProducts(`limit=${limit}&skip=${skip}`));
  };

  return [products, productsStatus, handlePagination, limit];
};
