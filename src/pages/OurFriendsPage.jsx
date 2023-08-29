import React from 'react';
import { OurFriendsList } from 'components/OurFriendsList/FriendsList';
import { FriendsData } from 'components/OurFriendsList/FriendsData';
import { Title } from '../components/Title/Title.styled';

function OurFriendsPage() {
  return (
    <>
      <Title>Oure Friends</Title>
      <OurFriendsList FriendsData={FriendsData} />
    </>
  );
}

export default OurFriendsPage;
