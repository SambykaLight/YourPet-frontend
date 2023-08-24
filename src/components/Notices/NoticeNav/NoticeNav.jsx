import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as PlusSmallIcon } from '../../SvgIcons/SmallIconPlus.svg';
import { ReactComponent as Filter } from '../../SvgIcons/Filter.svg';
import css from './NoticeNav.module.css';

const NoticesNav = () => {
  return (
    <div className={css.navigationContainer}>
      <ul className={css.linksContainer}>
        <li className={css.link}>
          <NavLink
            className={({ isActive }) => (isActive ? css.active : '')}
            to="/notices/sell"
          >
            sell
          </NavLink>
        </li>
        <li className={css.link}>
          <NavLink
            className={({ isActive }) => (isActive ? css.active : '')}
            to="/notices/lost-found"
          >
            lost/found
          </NavLink>
        </li>
        <li className={css.link}>
          <NavLink
            className={({ isActive }) => (isActive ? css.active : '')}
            to="/notices/for-free"
          >
            in good hands
          </NavLink>
        </li>
        {
          <li className={css.link}>
            <NavLink
              className={({ isActive }) => (isActive ? css.active : '')}
              to="/notices/favorite"
            >
              favorite ads
            </NavLink>
          </li>
        }
        {
          <li className={css.link}>
            <NavLink
              className={({ isActive }) => (isActive ? css.active : '')}
              to="/notices/own"
            >
              my ads
            </NavLink>
          </li>
        }
      </ul>

      <ul className={css.addButtonContainer}>
        <li className={css.filterLink}>
          <NavLink
            className={({ isActive }) => (isActive ? css.active : '')}
            to="/notices/filter"
          >
            <button
              type="button"
              className={({ isActive }) => (isActive ? css.active : '')}
            >
              <p className={css.filterText}>Filter</p>
              <Filter />
            </button>
          </NavLink>
        </li>
        <li className={css.addButtonLink}>
          <button type="button">
            <p className={css.addPetText}>Add pet</p>
            <PlusSmallIcon />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default NoticesNav;
