import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { fetchPets } from 'redux/pets/operations';
// import { hideModalSuccessRegister } from 'redux/auth/operations';
// import { useSelector } from 'react-redux';

import UserData from 'components/UserData';
import UserPetsData from 'components/UserPetsData/UserPetsData';
// import useModal from 'hooks/useModal';
// import { selectModalSuccessRegister } from 'redux/auth/selectors';
// import CongratsModal from 'components/Modal/CongratsModal';

const UserPage = () => {
  // const dispatch = useDispatch();
  // const successRegister = useSelector(selectModalSuccessRegister);
  // const [  setIsOpen] = useModal();
  // toggleModal,
  // isOpen,

  useEffect(() => {
    document.title = 'YourPet | User';
  });

  // useEffect(() => {
  //   setIsOpen(true);
  //   dispatch(fetchPets());
  // }, [dispatch, setIsOpen]);

  // const onModalToggle = () => {
  //   dispatch(hideModalSuccessRegister());
  //   toggleModal();
  // };
  return (
    <>
      {/* {successRegister && (
        <CongratsModal isOpen={isOpen} toggleModal={onModalToggle} />
      )} */}
      <UserData />
      <UserPetsData />
    </>
  );
};

export default UserPage;
