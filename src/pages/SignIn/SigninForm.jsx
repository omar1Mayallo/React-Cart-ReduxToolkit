import React from "react";
import {Spinner} from "reactstrap";
import {useSignIn} from "../../hooks/auth/useSignIn";
const SigninForm = () => {
  const [loading, handleChange, handleSubmit] = useSignIn();
  return (
    <>
      <div className="signin-form-block">
        <h3 className="sign-head-box">Sign In</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
          <button className="py-2" type="submit" disabled={loading}>
            {loading ? <Spinner size="sm" /> : "Sign In"}
          </button>
        </form>
      </div>
    </>
  );
};

export default SigninForm;
