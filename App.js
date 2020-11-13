import {
  AppBar,
  Button,
  Container,
  Grid,
  Toolbar,
  Typography
} from "./web_modules/@material-ui/core.js";
import React, {useContext} from "./web_modules/react.js";
import {Counter} from "./components/counter/index.js";
import {Divider} from "./components/divider/index.js";
import {Form} from "./components/form/index.js";
import {Input} from "./components/input/index.js";
import {Logo} from "./components/logo/index.js";
import {MenuButton} from "./components/menuButton/index.js";
import {ShareButton} from "./components/shareButton/index.js";
import {ThemeContext} from "./theme/index.js";
function App({}) {
  const themeContext = useContext(ThemeContext);
  return /* @__PURE__ */ React.createElement(Container, null, /* @__PURE__ */ React.createElement(AppBar, null, /* @__PURE__ */ React.createElement(Toolbar, null, /* @__PURE__ */ React.createElement(MenuButton, null), /* @__PURE__ */ React.createElement(Logo, null), /* @__PURE__ */ React.createElement(ShareButton, null))), /* @__PURE__ */ React.createElement(Toolbar, null), /* @__PURE__ */ React.createElement(Grid, {
    container: true
  }, /* @__PURE__ */ React.createElement(Grid, {
    item: true,
    xs: 12
  }, /* @__PURE__ */ React.createElement(Typography, {
    variant: "body1"
  }, "The app has been opened for ", /* @__PURE__ */ React.createElement(Counter, null), " seconds"))), /* @__PURE__ */ React.createElement(Divider, null), /* @__PURE__ */ React.createElement(Form, {
    gridContainer: {elevation: 3},
    onSubmit: (e) => {
      e.preventDefault();
      console.log(e);
    }
  }, /* @__PURE__ */ React.createElement(Typography, {
    variant: "h5"
  }, "Contact"), /* @__PURE__ */ React.createElement(Input, {
    id: "app-textfield",
    helperText: `We'll never share your email.`,
    label: "Email adress"
  }), /* @__PURE__ */ React.createElement(Button, null, "Send")));
}
export default App;
