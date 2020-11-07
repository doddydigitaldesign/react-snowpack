import React from 'react';
import { ThemeProvider } from '../theme';

export const RootProvider: React.FC = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
