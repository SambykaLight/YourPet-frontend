import { Box, Pagination, PaginationItem } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { getNews, getNewsSearch } from '../../redux/news/operations';

function Paginations({ query }) {
  const dispatch = useDispatch();

  const handlePageChange = (event, newPage) => {
    if (!query) {
      dispatch(getNews({ page: newPage }));
    } else {
      dispatch(getNewsSearch({ page: newPage, query }));
    }
  };

  return (
    <Box
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        margin: '20px,0px',
        variant: 'outlined',
      }}
    >
      <Pagination
        count={5}
        color="primary"
        variant="outlined"
        onChange={handlePageChange}
        sx={{
          marginX: 'auto',
          marginBottom: '20px',
          boxShadow: '3px 8px 14px rgba(136, 198, 253, 0.19)',
          borderRadius: '45px',
          padding: '8px 12px',
        }}
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

export default Paginations;
