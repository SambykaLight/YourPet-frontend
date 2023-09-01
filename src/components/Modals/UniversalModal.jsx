import React from 'react';
import { UniversalContent, UniversalWrap } from './UniversalModal.styled';

const UniversalModal = ({ active, setActive, children }) => {
  console.log('UniversalModal');
  return (
    <UniversalWrap
      className={active && 'active'}
      onClick={() => setActive(false)}
    >
      <UniversalContent
        className={active && 'active'}
        onClick={e => e.stopPropagation()}
      >
        {children}
      </UniversalContent>
    </UniversalWrap>
  );
};

export default UniversalModal;
