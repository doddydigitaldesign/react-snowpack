import { CssBaseline } from '@material-ui/core';
import React from 'react';
import { ThemeProvider } from '../theme';

export const RootProvider: React.FC = ({ children }) => {
  return (
    <ThemeProvider>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
