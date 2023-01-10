import React from "react";
import {HeroSection} from "./home.styled";
import heroImg from "../../assets/hero.jpg";
import CustomButton from "../../components/CustomButton";
import {useNavigate} from "react-router-dom";

const HeroSec = () => {
  const navigate = useNavigate();
  return (
    <HeroSection>
      <div
        className="hero-img"
        style={{
          background: `url("${heroImg}") no-repeat center center`,
          backgroundSize: "cover",
          width: "100%",
          minHeight: "600px",
        }}
      >
        <div className="hero-txt mt-5">
          <h1>Dummy Shop</h1>
          <p>
            Now Up To <span>70%</span> Off
            <span> NEW YEAR SALE</span>
          </p>
          <CustomButton
            type="outline-btn"
            handleClick={() => navigate("/shop")}
          >
            Shop Now
          </CustomButton>
        </div>
      </div>
    </HeroSection>
  );
};

export default HeroSec;
