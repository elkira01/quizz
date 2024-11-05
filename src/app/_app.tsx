'use client';

import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '@/styles/theme';
import { GlobalStyle } from '@/styles/theme/GlobalStyle';
import { useAppTheme } from '@/hooks';

export default function AppThemeProvider({ children }: { children: React.ReactNode }) {
  const { theme, initTheme } = useAppTheme();

  useEffect(() => {
    initTheme();
  }, []);

  return (
    <ThemeProvider theme={theme !== 'light' ? darkTheme : lightTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
