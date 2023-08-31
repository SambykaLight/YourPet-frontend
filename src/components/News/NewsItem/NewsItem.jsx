import { Box, Card, Link, Typography } from '@mui/material';
import {
  itemStyles,
  cardStyles,
  imgStyles,
  newsStyles,
  descriptionStyles,
  titleStyles,
  textStyles,
  dataStyles,
  dateNewsStyles,
  linkNewsStyles,
  lineStyles,
} from './NewsItem.styled';
import { useTranslation } from 'react-i18next';

function NewsItem({ news }) {
  const newDate = new Date(news.date).toLocaleDateString('en-GB');
  const { t } = useTranslation();

  return (
    <>
      <Box sx={itemStyles}>
        <Box sx={lineStyles} />
        <Card sx={cardStyles}>
          <Box
            component="img"
            sx={imgStyles}
            src={
              news.imgUrl
                ? news.imgUrl
                : 'https://www.nicepng.com/maxp/u2e6o0r5w7i1w7y3/'
            }
            alt=""
          />
          <Box sx={newsStyles}>
            <Box sx={descriptionStyles}>
              <Typography sx={titleStyles}>{news.title}</Typography>
              <Typography sx={textStyles}>{news.text}</Typography>
            </Box>
            <Box sx={dataStyles}>
              <Typography sx={dateNewsStyles}>{newDate}</Typography>

              <Link
                sx={linkNewsStyles}
                variant="h3"
                target="_blank"
                rel="noreferrer"
                href={news.url}
              >
                <Typography>{t('Read more')}</Typography>
              </Link>
            </Box>
          </Box>
        </Card>
      </Box>
    </>
  );
}

export default NewsItem;
