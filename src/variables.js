const currentVersion = () => process.env.VERSION;
const PROJECT_NAME = 'Drupal';
const ALL_TAGS_URL = 'https://api.github.com/repos/drupal/drupal/git/refs/tags';
const repositoryUrl = () => `https://github.com/drupal/drupal/archive/refs/tags/${currentVersion()}.tar.gz`;
const BASE_PATH = '';
const PATH_DOWNLOAD_REPOSITORY = '';
const folderName = () => `/drupal-${currentVersion()}`;
const pathFolder = () => PATH_DOWNLOAD_REPOSITORY + folderName();
const targzFileName = () => `${pathFolder()}.tar.gz`;
const urlComposerMetric = () => `${pathFolder()}/report/composer.html`;
const commandPhpMetrics = () => `phpmetrics --report-html=${pathFolder()}/report ${pathFolder()}`;
const commandPhpDepend = () =>
  `cd ${BASE_PATH}/php-7.4.16 && php pdepend.phar --summary-xml=${pathFolder()}/jdepend.xml --jdepend-chart=${pathFolder()}/jdepend.svg --overview-pyramid=${pathFolder()}/pyramid.svg ${pathFolder()}`;
const PATH_FOLDER_PDEPEND_TEMP = '';
const DOC_ID = '';
const DOC_LINK = '';

module.exports = {
  currentVersion,
  PROJECT_NAME,
  ALL_TAGS_URL,
  repositoryUrl,
  BASE_PATH,
  PATH_DOWNLOAD_REPOSITORY,
  folderName,
  pathFolder,
  targzFileName,
  urlComposerMetric,
  commandPhpMetrics,
  commandPhpDepend,
  PATH_FOLDER_PDEPEND_TEMP,
  DOC_ID,
  DOC_LINK,
};
