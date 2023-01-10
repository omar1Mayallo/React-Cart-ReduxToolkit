import {useState, useEffect} from "react";
import {toast} from "react-toastify";
import {useSelector, useDispatch} from "react-redux";
import {userLogin} from "../../services/auth/authActions";
export const useSignIn = () => {
  const dispatch = useDispatch();
  const {loading, error} = useSelector((state) => state.auth);
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value});
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userLogin(values));
  };
  useEffect(() => {
    if (error) {
      toast.error("Please enter valid data", {theme: "dark"});
    }
  }, [error]);

  return [loading, handleChange, handleSubmit];
};
