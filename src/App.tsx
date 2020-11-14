import {
  AppBar,
  Button,
  Container,
  Grid,
  IconButton,
  Paper,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { Check, Close, FilterNone } from '@material-ui/icons';
import React, { useContext, useState } from 'react';
import { Counter } from './components/counter';
import { Divider } from './components/divider';
import { Form } from './components/form';
import { Input } from './components/input';
import { Logo } from './components/logo';
import { MenuButton } from './components/menuButton';
import { ShareButton } from './components/shareButton';
import { EmailRegEx } from './lib/regex/email';
import { phoneNumberValidators } from './lib/regex/telephone';
import { ThemeContext } from './theme/index';

interface AppProps {}

function App({}: AppProps) {
  const themeContext = useContext(ThemeContext);

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);

  const [tel, setTel] = useState('');
  const [telError, setTelError] = useState(false);

  const [showSubmitMessage, setShowSubmitMessage] = useState(false);
  const [copied, setCopied] = useState(false);

  return (
    <Container>
      <AppBar>
        <Toolbar>
          <MenuButton />
          <Logo />
          <ShareButton />
          <Typography variant={'h6'}>
            <Counter variant={'h6'} />s
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Form
        gridContainer={{ elevation: 3 }}
        onSubmit={(e) => {
          e.preventDefault();
          console.log(e);
        }}
      >
        <Typography variant={'h5'}>Validate</Typography>
        <Divider />
        <Input
          id={'app-textfield'}
          type={'email'}
          helperText={
            emailError
              ? 'Please use a valid email adress.'
              : `We'll never share your email.`
          }
          label={'Email adress'}
          onChange={(e) => {
            setEmail(e.target.value);
            setEmailError(EmailRegEx.test(e.target.value));
          }}
          error={emailError}
        />
        <Input
          id={'app-textfield'}
          type={'tel'}
          helperText={
            emailError
              ? 'Please use a valid telephone number.'
              : `We'll never share your telephone number.`
          }
          label={'Telephone number'}
          onChange={(e) => {
            const value = e.target.value;
            setTel(value);
            const {
              intlLandline,
              intlMobile,
              landline,
              mobile,
            } = phoneNumberValidators('swedish');

            const tests = [
              new RegExp(intlLandline as RegExp, 'g').test(value),
              new RegExp(intlMobile as RegExp, 'g').test(value),
              new RegExp(landline as RegExp, 'g').test(value),
              new RegExp(mobile as RegExp, 'g').test(value),
            ];
            console.log(tests);
            setTelError(tests.every((x) => x === false));
          }}
          error={telError}
        />
        <Divider />
        <Button
          variant={'contained'}
          color={'primary'}
          onClick={(e) => {
            e.preventDefault();
            console.log({
              email: { email, emailError },
              tel: { tel, telError },
            });
            setShowSubmitMessage(true);
          }}
        >
          Send
        </Button>
      </Form>
      <Grid container>
        <Toolbar />
        <Grid item xs={12}>
          <Typography variant={'caption'}>
            Email: {email} {!email ? '' : emailError ? '❌' : '✅'}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant={'caption'}>
            Telephone number: {tel} {!tel ? '' : telError ? '❌' : '✅'}
          </Typography>
        </Grid>
        {showSubmitMessage && (
          <Grid
            item
            xs={6}
            component={Paper}
            style={{
              padding: '1rem',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: 'limegreen',
            }}
          >
            <Typography variant={'body1'}>
              Submitted values logged to console (F12).
            </Typography>
            <div>
              <IconButton
                onClick={(e) => {
                  e.preventDefault();
                  navigator.clipboard.writeText(
                    JSON.stringify({
                      email: { email, emailError },
                      tel: { tel, telError },
                    }),
                  );
                  setCopied(true);
                }}
              >
                {copied ? <Check /> : <FilterNone />}
              </IconButton>
              <IconButton
                onClick={(e) => {
                  e.preventDefault();
                  setShowSubmitMessage(false);
                }}
              >
                <Close />
              </IconButton>
            </div>
          </Grid>
        )}
      </Grid>
    </Container>
  );
}

export default App;
