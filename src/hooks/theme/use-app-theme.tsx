import { useEffect, useState } from 'react';
import { ThemeType } from '@/styles/theme/types';

const UseAppTheme = () => {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>('dark');

  useEffect(() => {
    console.log(currentTheme);
  }, [currentTheme]);
  return {
    currentTheme,
    toggleTheme: () => setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light'),
    // setTheme: (theme: 'dark' | 'light') => setCurrentTheme(theme),
  };
};

export default UseAppTheme;
