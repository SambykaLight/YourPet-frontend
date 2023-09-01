import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../../redux/themeSlice/operations';
import { IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { darkTheme } from 'redux/themeSlice/selectors';
import { iconStyles } from './ThemeSwitcher.styled';

function ThemeSwitcher() {
  const dispatch = useDispatch();
  const theme = useSelector(darkTheme);

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <IconButton edge="end" color="inherit" onClick={handleThemeToggle}>
      {theme === 'light' ? (
        <Brightness4Icon sx={iconStyles} />
      ) : (
        <Brightness7Icon sx={iconStyles} />
      )}
    </IconButton>
  );
}

export default ThemeSwitcher;
