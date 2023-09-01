import { CardMedia } from '@mui/material';
import {
  FriendsList,
  FriendsItem,
  FriendsName,
  FriendsContacts,
  ContactsLink,
} from './FriendsList.styled';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';
import { darkTheme } from 'redux/themeSlice/selectors';
import React, { useState } from 'react';

export const OurFriendsList = ({ FriendsData }) => {
  const isDarkTheme = useSelector(darkTheme);

  function formatPhone(number) {
    if (number === 'email only') {
      return 0;
    }
    return number.split(' ').join('');
  }

  const [openMenus, setOpenMenus] = useState(
    Array(FriendsData.length).fill(false)
  );

  const handleTimeClick = index => {
    const newOpenMenus = [...openMenus];
    if (FriendsData[index].time !== 'day and night') {
      newOpenMenus[index] = !newOpenMenus[index];
    }
    setOpenMenus(newOpenMenus);
  };

  const workingHours = {
    MO: '08:00 - 20:00',
    TU: '08:00 - 20:00',
    WE: '08:00 - 20:00',
    TH: '08:00 - 20:00',
    FR: '08:00 - 20:00',
    SA: '08:00 - 20:00',
    SU: '08:00 - 20:00',
  };

  return (
    <>
      <FriendsList>
        {FriendsData.length > 0 &&
          FriendsData.map((friend, index) => (
            <FriendsItem
              key={friend.id}
              style={{ backgroundColor: isDarkTheme === 'dark' && '#6b818f' }}
            >
              <FriendsName href={friend.link} target="_blank">
                {friend.name}
              </FriendsName>
              <Box
                sx={{
                  display: 'flex',
                  marginTop: '16px',
                  justifyContent: 'space-between',
                }}
              >
                <CardMedia
                  sx={{ width: 146, height: 104, backgroundSize: 'contain' }}
                  image={friend.image}
                  title={friend.name}
                />

                <Box
                  sx={{
                    width: '50%',
                    textAlign: 'left',
                  }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      display: 'flex',
                      width: '100%',
                      textAlign: 'left',
                    }}
                  >
                    <div
                      onClick={() => handleTimeClick(index)}
                      style={{ cursor: 'pointer' }}
                    >
                      <FriendsContacts> Time: {friend.time}</FriendsContacts>
                    </div>
                    {openMenus[index] && friend.time !== 'day and night' && (
                      <div
                        style={{
                          position: 'absolute',
                          zIndex: 999,
                          backgroundColor: 'white',
                          top: '20px',
                          background: '#ffffff',
                          boxShadow: '3px 8px 14px rgba(136, 198, 253, 0.19)',
                          border: '1px solid #54adff',
                          borderRadius: '8px',
                          padding: '10px',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'flex-end',
                        }}
                      >
                        {Object.keys(workingHours).map(day => (
                          <p key={day}>
                            {day} {workingHours[day]}
                          </p>
                        ))}
                      </div>
                    )}
                  </Box>
                  <FriendsContacts
                    style={{
                      marginTop: '12px',
                    }}
                  >
                    Address
                    <br />
                    {friend.address}
                  </FriendsContacts>
                  <FriendsContacts>
                    Email
                    <br />
                    <ContactsLink href={`mailto:${friend.email}`}>
                      {' '}
                      {friend.email}
                    </ContactsLink>
                  </FriendsContacts>
                  <FriendsContacts>
                    Phone
                    <br />
                    <ContactsLink href={`tel:${formatPhone(friend.phone)}`}>
                      {' '}
                      {friend.phone}
                    </ContactsLink>
                  </FriendsContacts>
                </Box>
              </Box>
            </FriendsItem>
          ))}
      </FriendsList>
    </>
  );
};

export default OurFriendsList;
