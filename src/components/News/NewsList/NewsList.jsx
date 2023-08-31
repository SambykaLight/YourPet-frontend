import React from 'react';
import { useSelector } from 'react-redux';
import { selectNews, getLoader } from '../../../redux/news/selectors';
import { Container, List, Typography } from '@mui/material';
import { container, list, titleResult } from './NewsList.styled';
import NewsItem from '../NewsItem/NewsItem';
import { useTranslation } from 'react-i18next';

function NewsList({ query }) {
  const news = useSelector(selectNews);
  const isLoader = useSelector(getLoader);
  const { t } = useTranslation();

  const sortedNews = [...news].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <>
      <Container sx={container}>
        {!isLoader && news.length > 0 && (
          <List sx={list}>
            {sortedNews.map(item => (
              <NewsItem key={item._id} news={item} />
            ))}
          </List>
        )}
        {!isLoader && news.length === 0 && (
          <Typography sx={titleResult}>
            {t('No results for')} "{query}"
          </Typography>
        )}
      </Container>
    </>
  );
}

export default NewsList;
