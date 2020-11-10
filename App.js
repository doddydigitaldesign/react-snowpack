import {
  AppBar,
  Container,
  Grid,
  Icon,
  IconButton,
  Toolbar,
  Typography
} from "./web_modules/@material-ui/core.js";
import {Menu} from "./web_modules/@material-ui/icons.js";
import React, {useContext, useEffect, useState} from "./web_modules/react.js";
import {ShareButton} from "./components/shareButton/index.js";
import {ThemeContext} from "./theme/index.js";
function App({}) {
  const themeContext = useContext(ThemeContext);
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1e3);
    return () => clearTimeout(timer);
  }, [count, setCount]);
  useEffect(() => {
  }, [count]);
  return /* @__PURE__ */ React.createElement(Container, null, /* @__PURE__ */ React.createElement(AppBar, null, /* @__PURE__ */ React.createElement(Toolbar, null, /* @__PURE__ */ React.createElement(IconButton, null, /* @__PURE__ */ React.createElement(Icon, null, /* @__PURE__ */ React.createElement(Menu, null))), /* @__PURE__ */ React.createElement(Typography, {
    variant: "body1"
  }, "DDD React Snowpack"), /* @__PURE__ */ React.createElement(ShareButton, null))), /* @__PURE__ */ React.createElement(Toolbar, null), /* @__PURE__ */ React.createElement(Grid, {
    container: true
  }, /* @__PURE__ */ React.createElement(Grid, {
    item: true,
    xs: 12
  }, /* @__PURE__ */ React.createElement(Typography, {
    variant: "h3"
  }, "The app has been open for " + count + " seconds"))));
}
export default App;
