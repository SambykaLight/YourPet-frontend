import React from 'react';
import { ReactComponent as PlusSmallIcon } from '../../SvgIcons/SmallIconPlus.svg';
import { ReactComponent as Filter } from '../../SvgIcons/Filter.svg';
import {NavContainer, List, Li,  AddBtnContainer, FilterLink, Button, AddButtonLink, AddButton, FilterText, AddPetText,NoticesNavLink, NoticesNavLinkBtn} from './NoticeNav.styled';

const NoticesNav = () => {
  return (
    <NavContainer>
      <List >
        <Li>
          <NoticesNavLink
            // className={({ isActive }) => (isActive ? css.active : '')}
            to="/notices/sell"
          >
            sell
          </NoticesNavLink>
        </Li>
        <Li>
          <NoticesNavLink
            // className={({ isActive }) => (isActive ? css.active : '')}
            to="/notices/lost-found"
          >
            lost/found
          </NoticesNavLink>
        </Li>
        <Li >
          <NoticesNavLink
            // className={({ isActive }) => (isActive ? css.active : '')}
            to="/notices/in-good-hands"
          >
            in good hands
          </NoticesNavLink>
        </Li>
        {
          <Li >
            <NoticesNavLink
              // className={({ isActive }) => (isActive ? css.active : '')}
              to="/notices/favorite"
            >
              favorite ads
            </NoticesNavLink>
          </Li>
        }
        {
          <Li>
            <NoticesNavLink
              // className={({ isActive }) => (isActive ? css.active : '')}
              to="/notices/own"
            >
              my ads
            </NoticesNavLink>
          </Li>
        }
      </List>

      <AddBtnContainer>
        <FilterLink>
          <NoticesNavLinkBtn
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
          </NoticesNavLinkBtn>
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
