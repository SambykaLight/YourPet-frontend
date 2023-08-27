import { useSelector } from 'react-redux';
import { selectPetsInfo, selectIsLoading } from 'redux/pets/selectors';

import AddIcon from '@mui/icons-material/Add';
import { Container, Title, Button, TitleContainer } from './PetsData.styled';

import PetsList from '../PetsList';
import NotFound from './NotFound';

const PetsData = () => {
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
        <PetsList pets={petsInfo} />
      )}
    </Container>
  );
};

export default PetsData;
