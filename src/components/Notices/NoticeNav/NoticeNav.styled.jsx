import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavContainer = styled.div`
  padding: 0 10px;
  margin-top: 43px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: auto;

  @media screen and (max-width: 1199px) {
    padding: 0 12px;
  }
`;
export const NoticesNavLink = styled(NavLink)`
  color: #54adff;
  background: #cce4fb;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 8px 16px;
  border-radius: 40px;
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  align-items: center;
  letter-spacing: 0.04em;
  transition: color 250ms ease-in, background-color 250ms ease-in;

  :hover,
  &.active {
    color: #fef9f9;
    background: #54adff;
  }
`;
export const NoticesNavLinkBtn = styled(NavLink)`
  color: #54adff;
  // background: #CCE4FB;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  // padding: 8px 16px;
  border-radius: 40px;
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  align-items: center;
  letter-spacing: 0.04em;
  transition: color 250ms ease-in, background-color 250ms ease-in;

  :hover,
  &.active {
    color: #fef9f9;
    background: #54adff;
  }
  &.selected {
    color: red;
  }
`;
export const List = styled.ul`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 6px;
`;

export const Li = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: 35px;
  border-radius: 40px;
  color: #54adff;
  text-decoration: none;

  @media screen and(min-width:767px) {
    margin: 0 8px;
  }
  :hover {
    background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
    color: rgb(253, 247, 242);
    border: none;
    background-color: transparent;
  }
  .active {
    color: #fff;
  }
`;

export const FilterLink = styled.li`
  .active {
    background-color: #54adff;
    color: #fff;
  }
`;
export const Button = styled.button`
  min-width: 152px;
  background: #fff;
  color: #54adff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-radius: 40px;
  min-height: 35px;
  border: 2px solid #54adff;
  text-decoration: none;
  svg {
    order: 2;
    width: 24px;
    height: 24px;
    stroke: currentColor;
  }
  :hover {
    background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
    color: rgb(253, 247, 242);
    border: none;
    background-color: transparent;
  }

  @media screen and (max-width: 767px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    border-radius: 40px;
    background: #cce4fb;
    border: none;
    color: #54adff;
    min-height: 40px;
    min-width: 40px;
    text-decoration: none;
  }
`;
export const AddBtnContainer = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  margin-left: auto;
  @media screen and (min-width: 767px) {
    gap: 12px;
  }
`;
export const AddButtonLink = styled(NavLink)`
  svg {
    order: 2;
    width: 24px;
    height: 24px;
    stroke: currentColor;
    text-decoration: none;
  }
  @media screen and (max-width: 767px) {
    width: 35px;
    height: 35px;
  }
`;
export const AddButton = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-radius: 40px;
  min-height: 35px;
  border: 2px solid #54adff;
  text-decoration: none;
  min-width: 134px;
  background: #54adff;
  color: #fff;

  @media screen and (max-width: 767px) {
    position: fixed;
    right: 0;
    top: 70%;
    z-index: 10;
    display: flex;
    justify-content: center;
    flex-direction: column-reverse;
    /* flex-direction: row; */
    border-radius: 40px;
    min-height: 80px;
    min-width: 80px;
    border: 2px solid #54adff;
    text-decoration: none;
  }
  :hover {
    background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
    color: rgb(253, 247, 242);
    border: none;
    background-color: transparent;
  }
`;

export const FilterText = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  text-decoration: none;
  // :hover, &.active {
  //   color: #FEF9F9;
  //   background: #54adff;
  // }

  @media screen and (max-width: 767px) {
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    display: none;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 22px;
  }
`;
export const AddPetText = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  text-decoration: none;

  @media screen and (max-width: 767px) {
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
  }
`;
