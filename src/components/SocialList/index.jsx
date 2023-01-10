import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import {StyledSocialList} from "./socialList.styled";
const SocialList = () => {
  return (
    <StyledSocialList>
      <li className="facebook">
        <FaFacebookF />
      </li>
      <li className="twitter">
        <FaTwitter />
      </li>
      <li className="instagram">
        <FaInstagram />
      </li>
      <li className="youtube">
        <FaYoutube />
      </li>
      <li className="linkedin">
        <FaLinkedin />
      </li>
    </StyledSocialList>
  );
};

export default SocialList;
