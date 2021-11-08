const fs = require('fs');
const lodash = require('lodash');
const convert = require('xml-js');
const { exec } = require('child_process');
const { commandPhpDepend, pathFolder, PATH_FOLDER_PDEPEND_TEMP } = require('./variables');

const upperObjectKeys = (obj) => {
  return lodash.transform(obj, (result, val, key) => {
    result[key.toUpperCase()] = val.toString();
  });
};

const phpDepend = () => {
  console.log('\n- Starting PhpDepend Analysis...');
  return new Promise((resolve) => {
    const child = exec(commandPhpDepend());
    child.stdout.removeAllListeners('data');
    child.stderr.removeAllListeners('data');
    child.stdout.pipe(process.stdout);
    child.stderr.pipe(process.stderr);

    child.on('close', () => {
      const xmlFile = fs.readFileSync(`${pathFolder()}/jdepend.xml`, 'utf8');
      const jsonData = JSON.parse(convert.xml2json(xmlFile, { compact: true, spaces: 2 }));
      delete jsonData.metrics._attributes.generated;
      delete jsonData.metrics._attributes.pdepend;

      fs.rmdirSync(PATH_FOLDER_PDEPEND_TEMP, { recursive: true });
      console.log('\n- Temp files deleted!');

      console.log('\n- Analysis completed!');
      resolve(upperObjectKeys(jsonData.metrics._attributes));
    });
  });
};

module.exports = {
  phpDepend,
};
