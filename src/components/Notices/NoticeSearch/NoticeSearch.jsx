import { BsSearch } from 'react-icons/bs';
import {Form, FormContainer, Input, BtnSearch, } from "./NoticesSearch.styled"

const NoticesSearch = () => {
  return (
    <Form >
      <FormContainer >
        <Input
          type="text"
          placeholder="Search"
          autoComplete="off"
          autoFocus
        />

        <BtnSearch type="submit">
          <BsSearch />
        </BtnSearch>
      </FormContainer>
    </Form>
  );
};

export default NoticesSearch;
