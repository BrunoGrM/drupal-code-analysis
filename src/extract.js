const fs = require('fs');
const extract = require('progress-extract');
const { targzFileName, PATH_DOWNLOAD_REPOSITORY } = require('./variables');

const extractProject = async () => {
  console.log('\n- Extracting repository...');
  await extract(targzFileName(), PATH_DOWNLOAD_REPOSITORY).then(() => {
    console.log('\n- Project extracted!');
    fs.unlinkSync(targzFileName());
    console.log('\n- Tar gz file removed!');
  });
};

module.exports = {
  extractProject,
};
