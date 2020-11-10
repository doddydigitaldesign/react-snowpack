import fs from 'fs';
import path from 'path';

function copyNoJekyll() {
  fs.appendFileSync(path.resolve(__dirname, '../build/', '.nojekyll'), '');
  fs.appendFileSync(
    path.resolve(__dirname, '../build/web_modules/common/', '.nojekyll'),
    '',
  );
}

copyNoJekyll();
