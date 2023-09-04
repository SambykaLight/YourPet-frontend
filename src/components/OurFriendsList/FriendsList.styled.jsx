import styled from '@emotion/styled';

export const FriendsList = styled.ul`
  margin-bottom: 24px;

  @media screen and (min-width: 748px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    row-gap: 20px;
  }
`;

export const WorkTitle = styled.div`
  position: absolute;
  z-index: 999;
  top: 20px;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border: 1px solid #54adff;
  border-radius: 8px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background-color: #fff;
`;

export const FriendsItem = styled.li`
  text-align: center;
  border-radius: 40px;
  padding: 16px;
  box-shadow: 3px 8px 8px rgba(136, 198, 253, 0.19);
  background-color: #ffffff;
  width: 280px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 767px) {
    :not(:first-of-type) {
      margin-top: 20px;
    }
  }

  @media screen and (min-width: 768px) {
    width: 336px;
    height: 275px;
  }

  @media screen and (min-width: 1280px) {
    width: 395px;
    height: 287px;
  }
`;

export const FriendsName = styled.a`
  font-size: 24px;
  font-weight: 700;
  color: #54adff;
  text-decoration: none;
`;

export const FriendsContacts = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: #111111;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);


  :not(:first-of-type) {
    margin-top: 12px;
  }

  @media screen and (min-width: 748px) and (max-width: 1279px) {
    font-size: 14px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 16px;
  }
`;

export const ContactsLink = styled.a`
  text-decoration: none;
  font-size: 12px;
  font-weight: 500;
  color: #111111;
  transition: color 250ms ease-in;

  :hover {
    color: #54adff;
  }

  @media screen and (min-width: 748px) and (max-width: 1279px) {
    font-size: 14px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 16px;
  }
`;
