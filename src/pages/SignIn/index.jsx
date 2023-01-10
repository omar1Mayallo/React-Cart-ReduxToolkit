import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import signinBanner from "../../assets/signin-banner.jpg";
import {StyledSignInSection} from "./signin.styled";
import SigninForm from "./SigninForm";

const SignIn = () => {
  const navigate = useNavigate();
  const {userInfo} = useSelector((state) => state.auth);
  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);
  return (
    <>
      <StyledSignInSection
        className="signin-section"
        style={{
          background: `url("${signinBanner}") no-repeat center center`,
          backgroundSize: "cover",
          width: "100%",
          minHeight: "100vh",
        }}
      >
        <SigninForm />
        <p className="mt-3 text-center" style={{color: "gray", zIndex: "100"}}>
          Valid name and password to test
          <br />
          name : kminchelle, password : 0lelplR
        </p>
      </StyledSignInSection>
    </>
  );
};

export default SignIn;
