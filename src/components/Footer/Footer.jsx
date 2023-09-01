import React from 'react';
import {
  FooterMain,
  FooterContainer,
  FooterText,
  BounceHeart,
} from './Footer.styled';
import { useSelector } from 'react-redux';
import { darkTheme } from 'redux/themeSlice/selectors';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const isDarkTheme = useSelector(darkTheme);
  return (
    <FooterMain
      style={{ backgroundColor: isDarkTheme === 'dark' && '#809cb5' }}
    >
      <FooterContainer>
        <FooterText>&#xA9; 2023 </FooterText>
        <FooterText>{t('All Rights Reserved')}</FooterText>
        <BounceHeart />
        <FooterText>{t('by GoIT Students')}</FooterText>
      </FooterContainer>
    </FooterMain>
  );
};

export default Footer;
