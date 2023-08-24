// import React from 'react'
// import css from './UserData.module.css';
// import { Formik, Form } from 'formik';
// import Button from '@mui/material/Button';
// import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
// import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
// // import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
// import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
// import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
// // import Checkbox from '@mui/material/Checkbox';
// // import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
// const  UserData=()=> {
//   return (
//     <>
//       <div>

//         <div
//           className={`${css.myСomponent.dark} }`}
//         >
//           <div className={css.wrapper}>
//             <h2 className={css.title}>'My information'</h2>
//             <Formik>
//               {({ errors, touched }) => (
//                 <Form className={css.forma}>
//                   <div className={css.avatarWrapper}>

//                       <img
//                         src={"https://images.pexels.com/photos/17486592/pexels-photo-17486592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}
//                         alt="Preview"
//                         className={css.avatar}
//                       />
//                     <div className={css.wrapperFile}>
//                         <>
//                           <Button
//                             variant="outlined"
//                             style={{
//                               border: 'rgba(0, 0, 0, 0)',
//                               color: '#111111',
//                               fontSize: '12px',
//                               padding: '0',
//                               paddingRight: '5px',
//                               borderRadius: '10px',
//                               fontFamily: 'Manrope',
//                               textTransform: 'none',
//                               marginRight: '12px',
//                             }}
//                           >
//                             <DoneOutlinedIcon
//                               style={{
//                                 color: '#54ADFF',
//                                 padding: '0px',
//                                 height: '24px',
//                                 width: '24px',
//                                 marginRight: '0',
//                               }}
//                             />
//                           </Button>
//                           <Button
//                             style={{
//                               border: 'rgba(0, 0, 0, 0)',
//                               color: '#111111',
//                               fontSize: '12px',
//                               padding: '0',
//                               paddingRight: '5px',
//                               borderRadius: '10px',
//                               fontFamily: 'Manrope',
//                               textTransform: 'none',
//                               marginRight: 'auto',
//                             }}
//                           >
//                             <ClearOutlinedIcon
//                               style={{
//                                 color: '#ffc107',
//                                 padding: '0px',
//                                 height: '24px',
//                                 width: '24px',
//                               }}
//                             />
//                           </Button>
//                         </>
//                         <label htmlFor="fileElem" className={css.avatarLabel}>
//                           <CameraAltOutlinedIcon
//                             style={{ color: '#54ADFF', marginRight: '8px' }}

//                           />
//                           <input
//                             type="file"
//                             id="fileElem"
//                             accept="image/*"
//                             name="Edit photo"

//                             className={css.avatarBtn}

//                           />
//                         </label>


//                         <label htmlFor="fileElem" className={css.avatarLabel}>
//                           <CameraAltOutlinedIcon
//                             style={{ color: '#54ADFF', marginRight: '8px' }}
//                           />
//                           'Edit photo'
//                           <input
//                             type="file"
//                             id="fileElem"
//                             accept="image/*"
//                             name="Add photo"
//                             className={css.avatarBtn}

//                           />
//                         </label>

//                     </div>
//                   </div>


//                     <div className={css.formWrapper}>
//                       {/* {fields.map(field => (
//                         <div className={css.row} key={field.fieldName}>
//                           <label className={css.label}>{field.label}:</label>

//                           <div className={css.inputContainer}>
//                             <input
//                               name={field.fieldName}
//                               type={field.type}
//                               className={css.input}
//                               value={formData[field.fieldName]}
//                               placeholder={field.placeholder}
//                               required={field.email}
//                               onChange={handleChangeInput}
//                               disabled={!editingFields[field.fieldName]}
//                             />
//                             {errors[field.fieldName] &&
//                             touched[field.fieldName] ? (
//                               <div>{errors[field.fieldName]}</div>
//                             ) : null}

//                             <div className={css.checkbox}>
//                               <Checkbox
//                                 checked={editingFields[field.fieldName]}
//                                 onChange={() =>
//                                   handleEditField(field.fieldName)
//                                 }
//                                 icon={
//                                   <BorderColorOutlinedIcon
//                                     style={{
//                                       color: '#54ADFF',
//                                       width: '24px',
//                                       height: '24px',
//                                     }}
//                                   />
//                                 }
//                                 checkedIcon={
//                                   <CheckOutlinedIcon
//                                     style={{
//                                       color: '#00C3AD',
//                                       width: '24px',
//                                       height: '24px',
//                                       border: '1.5px',
//                                     }}
//                                   />
//                                 }
//                               />
//                             </div>
//                           </div>
//                         </div>
//                       ))} */}

//                       <Button
//                         variant="outlined"
//                         style={{
//                           border: 'rgba(0, 0, 0, 0)',
//                           color: '#888888',
//                           fontSize: '16px',
//                           padding: '0',
//                           fontFamily: 'Manrope',
//                           textTransform: 'none',
//                           marginRight: 'auto',
//                         }}
//                         className={css.logoutBtn}
//                         startIcon={
//                           <LogoutOutlinedIcon
//                             style={{
//                               color: '#54ADFF',
//                               transform: 'rotate(180deg)',
//                               fontSize: '24px',
//                             }}
//                           />
//                         }
//                       >
//                         'Log Out'
//                       </Button>
//                     </div>
//                 </Form>
//               )}
//             </Formik>
//           </div>
//         </div>
//       </div>
//     </>)
// }

// export default UserData
