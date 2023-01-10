import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllCategories} from "../../services/categories/categoriesSlice";

export const useGetAllCategories = () => {
  const {categories, categoriesStatus} = useSelector((state) => state.category);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  return [categories, categoriesStatus];
};
