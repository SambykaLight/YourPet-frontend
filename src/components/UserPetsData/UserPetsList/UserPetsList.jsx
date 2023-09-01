import { List, ListItem } from './UserPetsList.styled';
import UserPetItem from './UserPetItem';

export const UserPetsList = ({ pets }) => {
  return (
    <List>
      {pets.length > 0 &&
        pets.map(pet => (
          <ListItem key={pet._id}>
            <UserPetItem pet={pet} />
          </ListItem>
        ))}
    </List>
  );
};

export default UserPetsList;
