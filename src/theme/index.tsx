import {
  createMuiTheme,
  Theme,
  ThemeProvider as MUIThemeProvider,
} from '@material-ui/core';
import amber from '@material-ui/core/colors/amber';
import blue from '@material-ui/core/colors/blue';
import grey from '@material-ui/core/colors/grey';
import React, { useState } from 'react';

interface Props {
  theme?: Theme;
}

const defaultTheme = createMuiTheme({
  // unstable_strictMode: true,
  palette: {
    secondary: {
      ...amber,
      contrastText: '#000000',
    },
    text: {
      primary: grey[900],
      secondary: grey[500],
    },
    primary: {
      ...blue,
      contrastText: '#FFFFFF',
    },
  },
});

export interface IThemeContext {
  currentTheme: Theme;
  setTheme: typeof createMuiTheme | null;
}

export const ThemeContext = React.createContext<IThemeContext | null>(null);

export const ThemeProvider: React.FC<Props> = (props) => {
  const currentDefaultTheme = createMuiTheme(props.theme || defaultTheme);
  const [theme, setTheme] = useState<Theme>(currentDefaultTheme);

  const themeContext: IThemeContext = {
    currentTheme: theme,
    setTheme: (newTheme) => {
      const nextTheme = createMuiTheme(newTheme);
      setTheme(nextTheme);
      return nextTheme;
    },
  };

  return (
    <ThemeContext.Provider value={themeContext}>
      <MUIThemeProvider theme={theme}>{props.children}</MUIThemeProvider>
    </ThemeContext.Provider>
  );
};
