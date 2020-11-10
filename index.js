import App2 from './App.js';
import __SNOWPACK_ENV__ from './env.js';
import { RootProvider } from './providers/index.js';
import ReactDOM from './web_modules/react-dom.js';
import React from './web_modules/react.js';
import.meta.env = __SNOWPACK_ENV__;

ReactDOM.render(
  /* @__PURE__ */ React.createElement(
    React.StrictMode,
    null,
    /* @__PURE__ */ React.createElement(
      RootProvider,
      null,
      /* @__PURE__ */ React.createElement(App2, null),
    ),
  ),
  document.getElementById('root'),
);
if (import.meta.hot) {
  import.meta?.hot?.accept();
}
