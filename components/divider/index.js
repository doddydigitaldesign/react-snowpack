import {Divider as MuiDivider} from "../../web_modules/@material-ui/core.js";
import React from "../../web_modules/react.js";
import {useDividerStyles} from "./styles.js";
export const Divider = (props) => {
  const classes = useDividerStyles();
  return /* @__PURE__ */ React.createElement(MuiDivider, {
    className: classes.verticalSpacing,
    ...props
  });
};
