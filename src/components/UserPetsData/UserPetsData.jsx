import { useSelector, useDispatch } from 'react-redux';
import { selectPetsInfo, selectIsLoading } from 'redux/pets/selectors';
import { useEffect } from 'react';
import { ReactComponent as PlusSmallIcon } from '../SvgIcons/SmallIconPlus.svg';
// import { ReactComponent as PlusSmallIcon } from '../../SvgIcons/SmallIconPlus.svg';
import {
  Container,
  Title,
  Button,
  TitleContainer,
  AddText,
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
  return (
    <Container>
      <TitleContainer>
        <Title>My pets:</Title>
        <Button to="/add-pet" type="button">
          <AddText>Add pet</AddText>
          <PlusSmallIcon />
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
