 import { CategoryItem } from '../PetsItem/PetsItem';
 import cat from '../../UserPetsData/cat.json';
 import {List} from "./PetsList.styled"

 const CategoryList = () => {
   return (
     <List >
       {cat.map(card => (
         <CategoryItem {...card} key={card._id} />
       ))}
     </List>
   );
 };
 export default CategoryList;
