import {IconButton} from "../../../web_modules/@material-ui/core.js";
import {Share} from "../../../web_modules/@material-ui/icons.js";
import React, {useState} from "../../../web_modules/react.js";
import {useShareButtonStyles} from "./styles.js";
export const ShareButton = () => {
  const classes = useShareButtonStyles();
  const [success, setSuccess] = useState(false);
  return /* @__PURE__ */ React.createElement(IconButton, {
    color: success ? "secondary" : void 0,
    className: classes.alignLeft,
    onClick: (e) => {
      setSuccess(true);
      if ("share" in navigator) {
        navigator.share({url: location.host + location.pathname});
        return;
      }
      navigator.clipboard.writeText(location.host + location.pathname);
    }
  }, /* @__PURE__ */ React.createElement(Share, null));
};
