import styled from '@emotion/styled';

 export const Container = styled.div`
   width: 280px;
   @media screen and (min-width: 768px) {
     width: 703px;
   }
   @media screen and (min-width: 1280px) {
     width: 821px;
   }
 `;

 export const List = styled.ul`
   padding: 0;
   margin: 0;
 `;

 export const ListItem = styled.li`
   box-shadow: 3px 8px 8px rgba(136, 198, 253, 0.19);
   background-color: #ffffff;
   border-radius: 20px;
   padding: 16px 20px 40px;
   @media screen and (min-width: 748px) {
     border-radius: 40px;
     display: flex;
     gap: 20px;
     padding: 20px;
   }
   :not(:first-of-type) {
     margin-top: 20px;
   }
 `;

 export const Image = styled.img`
   display: block;
   width: 240px;
   height: 240px;
   border-radius: 20px;
   object-fit: cover;
   @media screen and (min-width: 748px) and (max-width: 1279.98px) {
     width: 128px;
     height: 128px;
   }
   @media screen and (min-width: 1280px) {
     width: 161px;
     height: 161px;
   }
 `;

 export const Description = styled.p`
   font-size: 14px;
   line-height: 1.57;
   margin: 0;
   margin-top: 12px;
   @media screen and (min-width: 748px) {
     font-size: 16px;
     :first-of-type {
       margin-top: 0;
     }
     :not(:first-of-type) {
       margin-top: 16px;
     }
   }
 `;

 export const Highlight = styled.span`
   font-weight: 700;
 `;

 export const Button = styled.button`
   position: absolute;
   top: 0;
   right: 0;
   border: none;
   background-color: transparent;
   cursor: pointer;
   color: #54adff;
 `;
