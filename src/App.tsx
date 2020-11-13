import { AppBar, Container, Grid, Toolbar } from '@material-ui/core';
import React, { useContext } from 'react';
import { Counter } from './components/counter';
import { Logo } from './components/logo';
import { MenuButton } from './components/menuButton';
import { ShareButton } from './components/shareButton';
import { ThemeContext } from './theme/index';

interface AppProps {}

function App({}: AppProps) {
  const themeContext = useContext(ThemeContext);

  return (
    <Container>
      <AppBar>
        <Toolbar>
          <MenuButton />
          <Logo />
          <ShareButton />
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Grid container>
        <Grid item xs={12}>
          <Counter />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
