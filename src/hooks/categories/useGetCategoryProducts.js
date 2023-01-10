import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getProductsOfCategory} from "../../services/categories/categoriesSlice";

export const useGetAllCategories = (category) => {
  const {categoryProducts, categoryProductsStatus} = useSelector(
    (state) => state.category
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsOfCategory(category));
  }, [category, dispatch]);

  return [categoryProducts, categoryProductsStatus];
};
