import { useSelector } from 'react-redux';
import { selectPetsInfo, selectIsLoading } from 'redux/pets/selectors';

import AddIcon from '@mui/icons-material/Add';
import { Container, Title, Button, TitleContainer } from './UserPetsData.styled';

import UserPetsList from 'components/UserPetsData/UserPetsList/UserPetsList';
import NotFound from './NotFound';

const UserPetsData = () => {
  const petsInfo = useSelector(selectPetsInfo);
  const isLoading = useSelector(selectIsLoading);

  return (
    <Container>
      <TitleContainer>
        <Title>My pets:</Title>
        <Button to="/add-pet">
          Add pet <AddIcon />
        </Button>
      </TitleContainer>

      {!isLoading && !petsInfo.length > 0 ? (
        <NotFound />
      ) : (
        <UserPetsList pets={petsInfo} />
      )}
    </Container>
  );
};

export default UserPetsData;
