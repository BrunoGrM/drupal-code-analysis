const axios = require('axios');
const { initSheet } = require('./sheet');
const { ALL_TAGS_URL } = require('./variables');

const getAllTags = async () => {
  const { data } = await axios.get(ALL_TAGS_URL);
  const INITAL_VERSION = 7;
  const tags = data
    .map((it) => it.ref.replace('refs/tags/', ''))
    .filter(
      (it) => !it.includes('beta') && !it.includes('alpha') && !it.includes('rc') && !it.includes('unstable') && it.charAt(0) >= INITAL_VERSION
    );
  return tags;
};

const init = async () => {
  const allTags = await getAllTags()
  const sheet = await initSheet();
  const rows = await sheet.getRows();
  const lastVersion = rows[rows.length - 1] ? rows[rows.length - 1].Version : -1;
  const nextVersion = allTags[allTags.indexOf(lastVersion) + 1];
  process.env.VERSION = nextVersion;
};

module.exports = {
  init,
};
