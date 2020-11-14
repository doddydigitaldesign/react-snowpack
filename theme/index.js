import {
  createMuiTheme,
  ThemeProvider as MUIThemeProvider
} from "../web_modules/@material-ui/core.js";
import amber2 from "../web_modules/@material-ui/core/colors/amber.js";
import blue2 from "../web_modules/@material-ui/core/colors/blue.js";
import grey2 from "../web_modules/@material-ui/core/colors/grey.js";
import React, {useState} from "../web_modules/react.js";
const defaultTheme = createMuiTheme({
  palette: {
    secondary: {
      ...amber2,
      contrastText: "#000000"
    },
    text: {
      primary: grey2[900],
      secondary: grey2[500]
    },
    primary: {
      ...blue2,
      contrastText: "#FFFFFF"
    }
  }
});
export const ThemeContext = React.createContext(null);
export const ThemeProvider = (props) => {
  const currentDefaultTheme = createMuiTheme(props.theme || defaultTheme);
  const [theme, setTheme] = useState(currentDefaultTheme);
  const themeContext = {
    currentTheme: theme,
    setTheme: (newTheme) => {
      const nextTheme = createMuiTheme(newTheme);
      setTheme(nextTheme);
      return nextTheme;
    }
  };
  return /* @__PURE__ */ React.createElement(ThemeContext.Provider, {
    value: themeContext
  }, /* @__PURE__ */ React.createElement(MUIThemeProvider, {
    theme
  }, props.children));
};
