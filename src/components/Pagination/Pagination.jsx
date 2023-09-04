import { Box, Pagination, PaginationItem } from '@mui/material';
import React from 'react';
import { boxStyles } from './Pagination.styled';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useDispatch } from 'react-redux';
import { fetchNoticesByCategory } from 'redux/notices/operations';
import { useParams } from 'react-router-dom';

function AddPagination({ currentPage, total, query }) {
  const dispatch = useDispatch();
  const { category } = useParams();

  const handlePageChange = (event, newPage) => {
    dispatch(fetchNoticesByCategory({ category: category, page: newPage }));
  };

  return (
    <Box sx={boxStyles}>
      <Pagination
        count={total}
        color="primary"
        variant="outlined"
        page={currentPage}
        sx={{
          marginX: 'auto',
          marginBottom: '20px',
          boxShadow: '3px 8px 14px rgba(136, 198, 253, 0.19)',
          borderRadius: '45px',
          padding: '8px 12px',
        }}
        onChange={handlePageChange}
        renderItem={item => (
          <PaginationItem
            sx={{
              '&.Mui-selected': {
                background: '#54ADFF',
                color: '#FEF9F9',
                border: 'none',
              },

              color: '#CCE4FB',
              borderColor: '#CCE4FB',
            }}
            icons={{
              previous: <ArrowBackIcon />,
              next: <ArrowForwardIcon />,
            }}
            component="button"
            {...item}
          />
        )}
      />
    </Box>
  );
}

export default AddPagination;

// import { Box, Pagination, PaginationItem,  } from '@mui/material';
// import React from 'react';
// import { boxStyles } from './Pagination.styled';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import service from '../../service/index'

// const pageSize = 8;
// function AddPagination() {
// const [pagination, setPagination] = useState({
//     count:0,
//     from:0,
//     to: pageSize
// })

//     useEffect(() =>{
// service.getData({from: pagination.from, to: pagination.to}).then(response =>{
//     setPagination({...pagination, count: response.count});
// })
//     },[pagination.from, pagination.to]);

// const handlePageChange = (event, page) =>{
//     const from = (page - 1) * pageSize;
//     const to = (page - 1) * pageSize + pageSize;

//     setPagination({...pagination, from:from, to:to});
// }

// return (
//   <Box sx={boxStyles}>
//     <Pagination
//       //  count={Math.ceil(pagination.count/pageSize)}
//       count={5}
//       color="primary"
//       variant="outlined"
//       sx={{
//           marginX: 'auto',
//           marginBottom: '20px',
//           boxShadow: '3px 8px 14px rgba(136, 198, 253, 0.19)',
//           borderRadius: '45px',
//           padding: '8px 12px',
//       }}
//  onChange={handlePageChange}
//         renderItem={item =>(
//             <PaginationItem
//               sx={{
//                 '&.Mui-selected': {
//                   background: '#54ADFF',
//                   color: '#FEF9F9',
//                   border: 'none',
//                 },

//                 color: '#CCE4FB',
//                 borderColor: '#CCE4FB',
//               }}
//               icons={{
//                 previous: <ArrowBackIcon />,
//                 next: <ArrowForwardIcon />,
//               }}
//               component="button"
//             //   onClick={e => handlePageChange(e, item.page)}
//               {...item}
//       />
//   )}
//     />

//     </Box>
//   );
// }

// export default AddPagination;
