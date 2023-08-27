import React from 'react';
import { useTranslation } from 'react-i18next';

import '/node_modules/flag-icons/css/flag-icons.min.css';
import { FlagBtn, Label, Span } from './SwitchLanguage.styled.jsx';

function SwitchLanguage() {
  const { i18n } = useTranslation();

  const handleLangChange = ({ currentTarget }) => {
    const { value } = currentTarget;

    i18n.changeLanguage(value);
  };

  const currentLanguage = localStorage.getItem('i18nextLng') || 'en';

  return (
    <>
      {currentLanguage === 'uk' ? (
        <FlagBtn type="button" onClick={handleLangChange} value="gb">
          <Span>
            <span className="fi fi-ua" style={{ fontSize: '150px' }}></span>
          </Span>
          <Label>UA</Label>
        </FlagBtn>
      ) : (
        <FlagBtn type="button" onClick={handleLangChange} value="uk">
          <Span>
            <span className="fi fi-gb" style={{ fontSize: '150px' }}></span>
          </Span>
          <Label>EN</Label>
        </FlagBtn>
      )}
    </>
  );
}

export default SwitchLanguage;
