import React from "react";
import { FooterMain,FooterContainer,FooterSecondText,FooterText,BounceHeart } from "./Footer.styled";

const Footer = () => {
  return (
    <FooterMain>
      <FooterContainer class="footer__container">
      <FooterText class="footer__text footer__text--vertical-line">&#xA9; 2023</FooterText>
      <FooterText class="footer__text footer__text--vertical-line">All Rights Reserved</FooterText>
      <BounceHeart />
      <FooterText class="footer__text">by GoIT Students</FooterText>
    </FooterContainer>
    </FooterMain>
  );
};

export default Footer;