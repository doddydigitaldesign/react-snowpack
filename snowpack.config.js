/** @type {import("snowpack").SnowpackUserConfig } */

module.exports = {
  mount: {
    public: '/',
    src: '/',
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-typescript',
  ],
  install: [
    /* ... */
  ],
  installOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
    baseUrl: require('./package.json').homepage,
  },
  proxy: {
    /* ... */
  },
  alias: {
    /* ... */
  },
};
