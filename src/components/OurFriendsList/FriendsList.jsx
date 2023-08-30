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

export const OurFriendsList = ({ FriendsData }) => {
  const isDarkTheme = useSelector(darkTheme);

  function formatPhone(number) {
    if (number === 'email only') {
      return 0;
    }
    return number.split(' ').join('');
  }

  return (
    <>
      <FriendsList >
        {FriendsData.length > 0 &&
          FriendsData.map(friend => (
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
                  <FriendsContacts>
                    Time
                    <br />
                    {friend.time}
                  </FriendsContacts>
                  <FriendsContacts>
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
