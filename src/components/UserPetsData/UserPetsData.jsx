import { useSelector, useDispatch } from 'react-redux';
import { selectPetsInfo, selectIsLoading } from 'redux/pets/selectors';
import { useEffect } from 'react';
import AddIcon from '@mui/icons-material/Add';
import {
  Container,
  Title,
  Button,
  TitleContainer,
} from './UserPetsData.styled';
import UserPetsList from 'components/UserPetsData/UserPetsList/UserPetsList';
import NotFound from './NotFound';
import { fetchPets } from 'redux/pets/operations';

const UserPetsData = () => {
  const petsInfo = useSelector(selectPetsInfo);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPets()).catch(error => console.log(error));
  }, [dispatch]);

  console.log("🚀 ~ file: UserPetsData.jsx:17 ~ UserPetsData ~ petsInfo:", petsInfo)

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
