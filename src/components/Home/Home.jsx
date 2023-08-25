import React from 'react';
import { Container, Typography } from '@mui/material';
import { containerStyles, titleStyles } from './Home.styled';
import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();
  return (
    <>
      <Container sx={containerStyles}>
        <Typography variant="h3" sx={titleStyles}>
          {t('Take good care of your small pets')}
        </Typography>
      </Container>
    </>
  );
}

export default Home;
