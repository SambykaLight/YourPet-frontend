import { BsSearch } from 'react-icons/bs';


import css from '../NoticeSearc/NoticesSearch.module.css';

const NoticesSearch = () => {


  return (
    <form className={css.form} >
      <div className={css.formContainer}>
        <input
          type="text"
          placeholder="Search"
          className={css.input}
          autoComplete="off"
          autoFocus
        />

        <button className={css.btnSearch} type="submit">
          <BsSearch />
        </button>

      </div>
    </form>
  );
};

export default NoticesSearch;