
import React from 'react';
import {
  FooterMain,
  FooterContainer,
  FooterSecondText,
  FooterText,
  BounceHeart,
} from './Footer.styled';
import { useSelector } from 'react-redux';
import { darkTheme } from 'redux/themeSlice/selectors';




const Footer = () => {
  const isDarkTheme = useSelector(darkTheme);
  return (
    <FooterMain
      style={{ backgroundColor: isDarkTheme === 'dark' && '#809cb5' }}
    >
      <FooterContainer className="footer__container">
        <FooterText className="footer__text footer__text--vertical-line">
          &#xA9; 2023
        </FooterText>
        <FooterText className="footer__text footer__text--vertical-line">
          All Rights Reserved
        </FooterText>
        <BounceHeart />
        <FooterText className="footer__text">by GoIT Students</FooterText>
      </FooterContainer>
    </FooterMain>
  );
};

export default Footer;
