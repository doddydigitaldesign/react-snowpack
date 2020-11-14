import {
  AppBar,
  Button,
  Container,
  Grid,
  IconButton,
  Paper,
  Toolbar,
  Typography
} from "./web_modules/@material-ui/core.js";
import {Check, Close, FilterNone} from "./web_modules/@material-ui/icons.js";
import React, {useContext, useState} from "./web_modules/react.js";
import {Counter} from "./components/counter/index.js";
import {Divider} from "./components/divider/index.js";
import {Form} from "./components/form/index.js";
import {Input} from "./components/input/index.js";
import {Logo} from "./components/logo/index.js";
import {MenuButton} from "./components/menuButton/index.js";
import {ShareButton} from "./components/shareButton/index.js";
import {EmailRegEx} from "./lib/regex/email.js";
import {phoneNumberValidators} from "./lib/regex/telephone/index.js";
import {ThemeContext} from "./theme/index.js";
function App({}) {
  const themeContext = useContext(ThemeContext);
  const [email2, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [tel, setTel] = useState("");
  const [telError, setTelError] = useState(false);
  const [showSubmitMessage, setShowSubmitMessage] = useState(false);
  const [copied, setCopied] = useState(false);
  return /* @__PURE__ */ React.createElement(Container, null, /* @__PURE__ */ React.createElement(AppBar, null, /* @__PURE__ */ React.createElement(Toolbar, null, /* @__PURE__ */ React.createElement(MenuButton, null), /* @__PURE__ */ React.createElement(Logo, null), /* @__PURE__ */ React.createElement(ShareButton, null), /* @__PURE__ */ React.createElement(Typography, {
    variant: "h6"
  }, /* @__PURE__ */ React.createElement(Counter, {
    variant: "h6"
  }), "s"))), /* @__PURE__ */ React.createElement(Toolbar, null), /* @__PURE__ */ React.createElement(Form, {
    gridContainer: {elevation: 3},
    onSubmit: (e) => {
      e.preventDefault();
      console.log(e);
    }
  }, /* @__PURE__ */ React.createElement(Typography, {
    variant: "h5"
  }, "Validate"), /* @__PURE__ */ React.createElement(Divider, null), /* @__PURE__ */ React.createElement(Input, {
    id: "app-textfield",
    type: "email",
    helperText: emailError ? "Please use a valid email adress." : `We'll never share your email.`,
    label: "Email adress",
    onChange: (e) => {
      setEmail(e.target.value);
      setEmailError(EmailRegEx.test(e.target.value));
    },
    error: emailError
  }), /* @__PURE__ */ React.createElement(Input, {
    id: "app-textfield",
    type: "tel",
    helperText: emailError ? "Please use a valid telephone number." : `We'll never share your telephone number.`,
    label: "Telephone number",
    onChange: (e) => {
      const value = e.target.value;
      setTel(value);
      const {
        intlLandline,
        intlMobile,
        landline,
        mobile
      } = phoneNumberValidators("swedish");
      const tests = [
        new RegExp(intlLandline, "g").test(value),
        new RegExp(intlMobile, "g").test(value),
        new RegExp(landline, "g").test(value),
        new RegExp(mobile, "g").test(value)
      ];
      console.log(tests);
      setTelError(tests.every((x) => x === false));
    },
    error: telError
  }), /* @__PURE__ */ React.createElement(Divider, null), /* @__PURE__ */ React.createElement(Button, {
    variant: "contained",
    color: "primary",
    onClick: (e) => {
      e.preventDefault();
      console.log({
        email: {email: email2, emailError},
        tel: {tel, telError}
      });
      setShowSubmitMessage(true);
    }
  }, "Send")), /* @__PURE__ */ React.createElement(Grid, {
    container: true
  }, /* @__PURE__ */ React.createElement(Toolbar, null), /* @__PURE__ */ React.createElement(Grid, {
    item: true,
    xs: 12
  }, /* @__PURE__ */ React.createElement(Typography, {
    variant: "caption"
  }, "Email: ", email2, " ", !email2 ? "" : emailError ? "\u274C" : "\u2705")), /* @__PURE__ */ React.createElement(Grid, {
    item: true,
    xs: 12
  }, /* @__PURE__ */ React.createElement(Typography, {
    variant: "caption"
  }, "Telephone number: ", tel, " ", !tel ? "" : telError ? "\u274C" : "\u2705")), showSubmitMessage && /* @__PURE__ */ React.createElement(Grid, {
    item: true,
    xs: 6,
    component: Paper,
    style: {
      padding: "1rem",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: "limegreen"
    }
  }, /* @__PURE__ */ React.createElement(Typography, {
    variant: "body1"
  }, "Submitted values logged to console (F12)."), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(IconButton, {
    onClick: (e) => {
      e.preventDefault();
      navigator.clipboard.writeText(JSON.stringify({
        email: {email: email2, emailError},
        tel: {tel, telError}
      }));
      setCopied(true);
    }
  }, copied ? /* @__PURE__ */ React.createElement(Check, null) : /* @__PURE__ */ React.createElement(FilterNone, null)), /* @__PURE__ */ React.createElement(IconButton, {
    onClick: (e) => {
      e.preventDefault();
      setShowSubmitMessage(false);
    }
  }, /* @__PURE__ */ React.createElement(Close, null))))));
}
export default App;
