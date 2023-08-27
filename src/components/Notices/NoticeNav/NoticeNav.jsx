import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as PlusSmallIcon } from '../../SvgIcons/SmallIconPlus.svg';
import { ReactComponent as Filter } from '../../SvgIcons/Filter.svg';
import {NavContainer, List, Li,  AddBtnContainer, FilterLink, Button, AddButtonLink, AddButton, FilterText, AddPetText} from './NoticeNav.styled';

const NoticesNav = () => {
  return (
    <NavContainer>
      <List >
        <Li>
          <NavLink
            // className={({ isActive }) => (isActive ? css.active : '')}
            to="/notices/sell"
          >
            sell
          </NavLink>
        </Li>
        <Li>
          <NavLink
            // className={({ isActive }) => (isActive ? css.active : '')}
            to="/notices/lost-found"
          >
            lost/found
          </NavLink>
        </Li>
        <Li >
          <NavLink
            // className={({ isActive }) => (isActive ? css.active : '')}
            to="/notices/for-free"
          >
            in good hands
          </NavLink>
        </Li>
        {
          <Li >
            <NavLink
              // className={({ isActive }) => (isActive ? css.active : '')}
              to="/notices/favorite"
            >
              favorite ads
            </NavLink>
          </Li>
        }
        {
          <Li>
            <NavLink
              // className={({ isActive }) => (isActive ? css.active : '')}
              to="/notices/own"
            >
              my ads
            </NavLink>
          </Li>
        }
      </List>

      <AddBtnContainer>
        <FilterLink>
          <NavLink
            // className={({ isActive }) => (isActive ? css.active : '')}
            to="/notices/filter"
          >
            <Button
              type="button"
              // className={({ isActive }) => (isActive ? css.active : '')}
            >
              <FilterText>Filter</FilterText>
              <Filter />
            </Button>
          </NavLink>
        </FilterLink>
        <AddButtonLink >
          <AddButton type="button">
            <AddPetText>Add pet</AddPetText>
            <PlusSmallIcon />
          </AddButton>
        </AddButtonLink>
      </AddBtnContainer>
    </NavContainer>
  );
};

export default NoticesNav;
