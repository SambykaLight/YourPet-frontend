import { CardMedia } from '@mui/material';
import {
  FriendsList,
  FriendsItem,
  FriendsName,
  FriendsContacts,
  ContactsLink,
  WorkTitle,
} from './FriendsList.styled';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';
import { darkTheme } from 'redux/themeSlice/selectors';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const OurFriendsList = ({ FriendsData }) => {
  const isDarkTheme = useSelector(darkTheme);
  const { t } = useTranslation();

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

  const workingHours = [t('MN'), t('TU'), t('WE'), t('TH'), t('FR')];

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
                      <FriendsContacts>
                        {' '}
                        {t('Time')}: {friend.time}
                      </FriendsContacts>
                    </div>
                    {openMenus[index] && friend.time !== 'day and night' && (
                      <WorkTitle
                        style={{
                          backgroundColor: isDarkTheme === 'dark' && '#7791a8',
                        }}
                      >
                        {workingHours.map(day => {
                          return (
                            <p key={day}>
                              {day}{' '}
                              {friend.time.split(' ').map(time => {
                                return <span key={time}>{time}</span>;
                              })}
                            </p>
                          );
                        })}
                      </WorkTitle>
                    )}
                  </Box>
                  <FriendsContacts
                    style={{
                      marginTop: '12px',
                    }}
                  >
                    {t('Address')}
                    <br />
                    {friend.address}
                  </FriendsContacts>
                  <FriendsContacts>
                    {t('Email')}
                    <br />
                    <ContactsLink href={`mailto:${friend.email}`}>
                      {' '}
                      {friend.email}
                    </ContactsLink>
                  </FriendsContacts>
                  <FriendsContacts>
                    {t('Phone')}
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
