'use client';

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '@/styles/theme';
import useAppTheme from '@/hooks/theme/use-app-theme';
import { GlobalStyle } from '@/styles/theme/GlobalStyle';

export default function AppThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useAppTheme();

  return (
    <ThemeProvider theme={theme.currentTheme !== 'light' ? darkTheme : lightTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
