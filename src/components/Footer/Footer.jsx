import React from 'react';
import {
  FooterMain,
  FooterContainer,
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
      <FooterContainer>
        <FooterText>&#xA9; 2023</FooterText>
        <FooterText>All Rights Reserved</FooterText>
        <BounceHeart />
        <FooterText>by GoIT Students</FooterText>
      </FooterContainer>
    </FooterMain>
  );
};

export default Footer;
