import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

import { Image, Description, Highlight, Button } from './UserPetsList.styled';
import Box from '@mui/material/Box';
import { useState } from 'react';
import UniversalModal from 'components/Modals/UniversalModal';
import ModalDeleteAction from 'components/Modals/ModalDeleteAction/ModalDeleteAction';

export const UserPetItem = ({ pet }) => {
  const [deleteModalActive, setDeleteModalActive] = useState(false);

  return (
    <>
      <div>
        <Image src={pet.imageURL} alt="pet description" />
      </div>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
        }}
      >
        <Description>
          <Highlight>Name:</Highlight> {pet.name}
        </Description>

        <Button type="button" onClick={() => setDeleteModalActive(true)}>
          <DeleteOutlinedIcon size="42" />
        </Button>

        <Description>
          <Highlight>Date of birth:</Highlight> {pet.date}
        </Description>
        <Description>
          <Highlight>Type:</Highlight> {pet.type}
        </Description>
        <Description>
          <Highlight>Comments:</Highlight> {pet.comment}
        </Description>
        <UniversalModal
          active={deleteModalActive}
          setActive={setDeleteModalActive}
        >
          <ModalDeleteAction
            modalClose={() => {
              deleteModalActive(false);
            }}
          />
        </UniversalModal>
      </Box>
    </>
  );
};

export default UserPetItem;
