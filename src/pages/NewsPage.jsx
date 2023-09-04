import NewsSearch from 'components/News/NewsSearch/NewsSearch';
import { Title } from '../components/Title/Title.styled';
import { useTranslation } from 'react-i18next';
import { getLoader } from '../redux/news/selectors';
import { useSelector } from 'react-redux';
import Loader from '../components/Loader/Loader';

function NewsPage() {
  const isLoader = useSelector(getLoader);
  const { t } = useTranslation();
  return (
    <>
      <Title>{t('News')}</Title>
      {isLoader && <Loader />}
      <NewsSearch />
    </>
  );
}

export default NewsPage;
