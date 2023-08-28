import React from "react";
import { FooterMain,FooterContainer, FooterText,BounceHeart } from "./Footer.styled";

const Footer = () => {
  return (
    <FooterMain>
      <FooterContainer className="footer__container">
      <FooterText className="footer__text footer__text--vertical-line">&#xA9; 2023</FooterText>
      <FooterText className="footer__text footer__text--vertical-line">All Rights Reserved</FooterText>
      <BounceHeart />
      <FooterText className="footer__text">by GoIT Students</FooterText>
    </FooterContainer>
    </FooterMain>
  );
};

export default Footer;
