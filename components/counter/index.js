import {Typography} from "../../web_modules/@material-ui/core.js";
import React, {useEffect, useState} from "../../web_modules/react.js";
export const Counter = (props) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1e3);
    return () => clearTimeout(timer);
  }, [count, setCount]);
  return /* @__PURE__ */ React.createElement(Typography, {
    component: "time",
    ...props
  }, count);
};
