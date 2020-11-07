import {
  AppBar,
  Container,
  Grid,
  Icon,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import blue from '@material-ui/core/colors/blue';
import orange from '@material-ui/core/colors/orange';
import { Menu } from '@material-ui/icons';
import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from './theme/index';

interface AppProps {}

function App({}: AppProps) {
  const themeContext = useContext(ThemeContext);

  // Create the count state.
  const [count, setCount] = useState(0);
  // Create the counter (+1 every second).
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);

    return () => clearTimeout(timer);
  }, [count, setCount, themeContext]);
  // Return the App component.

  useEffect(() => {
    if (themeContext?.setTheme) {
      themeContext.setTheme({
        palette: {
          ...themeContext.currentTheme,
          primary:
            count % 3 === 0
              ? {
                  ...orange,
                  contrastText: '#FFFFFF',
                  dark: orange['900'],
                  light: orange['400'],
                  main: orange['600'],
                }
              : {
                  ...blue,
                  contrastText: '#FFFFFF',
                  dark: blue['900'],
                  light: blue['400'],
                  main: blue['600'],
                },
        },
      });
    }
  }, [count]);
  return (
    <Container>
      <AppBar>
        <Toolbar>
          <IconButton>
            <Icon>
              <Menu />
            </Icon>
          </IconButton>
          <Typography variant={'body1'}>DDD React Snowpack</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Grid container>
        <Grid item>
          <Typography variant={'h3'}>
            {'The app has been open for ' + count + ' seconds'}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
