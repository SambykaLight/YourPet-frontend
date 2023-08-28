import { useDispatch } from 'react-redux';
 import { deletePet } from 'redux/pets/operations';
 import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

 import { Image, Description, Highlight, Button } from './UserPetsList.styled';
 import Box from '@mui/material/Box';

 export const UserPetItem = ({ pet }) => {
   const dispatch = useDispatch();

   return (
     <>
       <div>
         <Image src={pet.imgURL} alt="pet description" />
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

         <Button type="button" onClick={() => dispatch(deletePet(pet._id))}>
           <DeleteOutlinedIcon size="42" />
         </Button>

         <Description>
           <Highlight>Date of birth:</Highlight> {pet.dateOfBirth}
         </Description>
         <Description>
           <Highlight>Breed:</Highlight> {pet.breed}
         </Description>
         <Description>
           <Highlight>Comments:</Highlight> {pet.comments}
         </Description>
       </Box>
     </>
   );
 };

 export default UserPetItem;
