import css from './NoticeTitle.module.css';
import { useTranslation } from 'react-i18next';

const Title = () => {
  const { t } = useTranslation();
  return <h1 className={css.title}>{t('Find your favorite pet')}</h1>;
};

export default Title;
