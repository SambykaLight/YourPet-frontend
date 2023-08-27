import React from 'react';
import {OurFriendsList} from 'components/OurFriendsList/FriendsList';
import {FriendsData} from 'components/OurFriendsList/FriendsData';

function OurFriendsPage() {
  return (
    <OurFriendsList FriendsData={FriendsData}/>
  )
}

export default OurFriendsPage