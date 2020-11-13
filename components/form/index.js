import {Grid, Paper} from "../../web_modules/@material-ui/core.js";
import React from "../../web_modules/react.js";
import {useFormStyles} from "./styles.js";
export const Form = ({gridContainer, ...restProps}) => {
  const classes = useFormStyles();
  return /* @__PURE__ */ React.createElement(Grid, {
    container: true,
    component: Paper,
    className: classes.internalSpacing,
    ...gridContainer
  }, /* @__PURE__ */ React.createElement("form", {
    ...restProps
  }));
};
