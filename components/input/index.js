import {TextField} from "../../web_modules/@material-ui/core.js";
import React from "../../web_modules/react.js";
import {FormElement} from "../formElement/index.js";
export const Input = (props) => {
  const helperTextId = props.id + "-helper-text";
  return /* @__PURE__ */ React.createElement(FormElement, {
    xs: 12
  }, /* @__PURE__ */ React.createElement(TextField, {
    ...props,
    "aria-describedby": helperTextId,
    variant: "outlined"
  }));
};
