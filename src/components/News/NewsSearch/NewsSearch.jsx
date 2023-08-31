import React, { useEffect, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import {
  Form,
  FormContainer,
  Input,
  BtnSearch,
  InputContainer,
  ClearIcon,
} from './NewsSearch.styled';
import { useDispatch } from 'react-redux';
import { getNews, getNewsSearch } from '../../../redux/news/operations';
import NewsList from '../NewsList/NewsList';
import Paginations from '../Paginations';
import { useTranslation } from 'react-i18next';

const NewsSearch = () => {
  const [input, setInput] = useState('');
  const [showClearIcon, setShowClearIcon] = useState(false);
  const { t } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    const data = { page: 1 };

    dispatch(getNews(data));
  }, [dispatch]);

  const handleInputChange = event => {
    const inputValue = event.target.value;

    setInput(inputValue);
    setShowClearIcon(inputValue !== '');
  };

  const handleClearClick = () => {
    setInput('');
    setShowClearIcon(false);

    const data = { page: 1 };
    dispatch(getNews(data));
  };

  const handleSubmit = event => {
    event.preventDefault();
    const data = { page: 1, query: input };

    dispatch(getNewsSearch(data));
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FormContainer>
          <InputContainer>
            <Input
              type="text"
              placeholder={t('Search')}
              autoComplete="off"
              autoFocus
              value={input}
              onChange={handleInputChange}
            />
            {showClearIcon && <ClearIcon onClick={handleClearClick} />}
          </InputContainer>

          <BtnSearch type="submit">
            <BsSearch />
          </BtnSearch>
        </FormContainer>
      </Form>
      <NewsList query={input} />
      <Paginations query={input} />
    </>
  );
};

export default NewsSearch;
