'use client';

import { Button } from '@nextui-org/button';

export const BtnTheme = () => {
  const handleClick = () => {
    const theme = document.documentElement.dataset.theme;
    document.documentElement.dataset.theme = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light');
  };

  return <Button onClick={handleClick}>TOGGLE THEME</Button>;
};
