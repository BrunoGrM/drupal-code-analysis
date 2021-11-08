const fs = require('fs');
const axios = require('axios');
const progressBar = require('progress');
const { repositoryUrl, targzFileName } = require('./variables');

const downloadProject = async () => {
  console.log('\n- Starting download repository...');
  const { data, headers } = await axios({
    url: repositoryUrl(),
    responseType: 'stream',
  });
  const totalLength = headers['content-length'] || 9999999;

  return new Promise((resolve, reject) => {
    const progress = new progressBar('  downloading [:bar] :rate/bps :percent :etas', {
      width: 25,
      complete: '=',
      incomplete: ' ',
      renderThrottle: 1,
      total: parseInt(totalLength),
    });

    const writer = fs.createWriteStream(targzFileName());
    data.pipe(writer);

    data.on('data', (chunk) => progress.tick(chunk.length));

    writer.on('finish', resolve);
    writer.on('error', reject);
  });
};

module.exports = {
  downloadProject,
};
