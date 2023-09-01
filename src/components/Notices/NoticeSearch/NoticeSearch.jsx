import { BsSearch } from 'react-icons/bs';
import { Form, FormContainer, Input, BtnSearch } from './NoticesSearch.styled';
import { useParams} from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchNoticesByCategory } from 'redux/notices/operations';

const NoticesSearch = () => {
  const dispatch = useDispatch();
  const { category } = useParams();
  const [value, setValue] = useState('');
  // const [searchParams, setSearchParams]= useSearchParams()
  // == Input change ==
  const handleInputChange = event => {
    const inputValue = event.currentTarget.value.toLowerCase();
    setValue(inputValue);
  };
  const handleSubmit = e => {
    e.preventDefault();
    const queryValue = value.trim();
    try {
      if (queryValue === '') {
        alert('Please write something');
        return;
      }
      if (category) {
        console.log('categoryName', category, 'value', queryValue);
        dispatch(
          fetchNoticesByCategory({
            categoryName: category,
            value: queryValue,
          })
        );
      }
    } catch (err) {
      console.error(err.message);
    }
    setValue('');
  };
  return (
    <Form onSubmit={handleSubmit}>
      <FormContainer>
        <Input
          type="text"
          value={value}
          placeholder="Search"
          autoComplete="off"
          autoFocus
          onChange={handleInputChange}
        />

        <BtnSearch type="submit">
          <BsSearch />
        </BtnSearch>
      </FormContainer>
    </Form>
  );
};

export default NoticesSearch;
