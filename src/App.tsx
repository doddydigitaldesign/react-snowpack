import {
  AppBar,
  Button,
  Container,
  Grid,
  Toolbar,
  Typography,
} from '@material-ui/core';
import React, { useContext } from 'react';
import { Counter } from './components/counter';
import { Divider } from './components/divider';
import { Form } from './components/form';
import { Input } from './components/input';
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
          <Typography variant={'body1'}>
            The app has been opened for <Counter /> seconds
          </Typography>
        </Grid>
      </Grid>
      <Divider />
      <Form
        gridContainer={{ elevation: 3 }}
        onSubmit={(e) => {
          e.preventDefault();
          console.log(e);
        }}
      >
        <Typography variant={'h5'}>Contact</Typography>
        <Input
          id={'app-textfield'}
          helperText={`We'll never share your email.`}
          label={'Email adress'}
        />
        <Button>Send</Button>
      </Form>
    </Container>
  );
}

export default App;
