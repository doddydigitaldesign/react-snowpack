import {
  AppBar,
  Container,
  Grid,
  Icon,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import React, { useContext, useEffect, useState } from 'react';
import { ShareButton } from './components/shareButton';
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
  }, [count, setCount]);
  // Return the App component.

  useEffect(() => {}, [count]);
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
          <ShareButton />
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Grid container>
        <Grid item xs={12}>
          <Typography variant={'h3'}>
            {'The app has been open for ' + count + ' seconds'}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
