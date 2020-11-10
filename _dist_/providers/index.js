import React from "../../web_modules/react.js";
import {ThemeProvider} from "../theme/index.js";
export const RootProvider = ({children}) => {
  return /* @__PURE__ */ React.createElement(ThemeProvider, null, children);
};
