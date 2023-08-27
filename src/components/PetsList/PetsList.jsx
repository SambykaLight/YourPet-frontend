import { List, ListItem } from './PetsList.styled';
import PetsItem from 'components/PetsItem';

export const PetsList = ({ pets }) => {
  return (
    <List>
      {pets &&
        pets.map(pet => (
          <ListItem key={pet._id}>
            <PetsItem pet={pet} />
          </ListItem>
        ))}
    </List>
  );
};

export default PetsList;
