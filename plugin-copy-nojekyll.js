const fs = require('fs');
const path = require('path');

function copyNoJekyll(dir) {
  const buildDir = path.resolve(dir, '.nojekyll');
  const webModulesDir = path.resolve(dir, 'web_modules/common/.nojekyll');
  console.log('Creating .nojekyll files in:', buildDir, ' and ', webModulesDir);

  fs.appendFileSync(buildDir, '');
  console.log('Created .nojekyll:', buildDir);
  fs.appendFileSync(webModulesDir, '');
  console.log('Created .nojekyll:', webModulesDir);
}

module.exports = function (snowpackConfig, pluginOptions) {
  return {
    name: 'plugin-copy-nojekyll',
    async optimize({ buildDirectory }) {
      copyNoJekyll(buildDirectory);
    },
  };
};
