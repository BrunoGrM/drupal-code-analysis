const fs = require('fs');
const { parse } = require('node-html-parser');
const { GoogleSpreadsheet } = require('google-spreadsheet');
const credentials = require('../credentials.json');
const { currentVersion, DOC_ID, urlComposerMetric } = require('./variables');

const newAnalysis = (nextID, resultSplitted, phpDependResult, composer) => {
  const value = (pos) => Number(resultSplitted[pos].replace(/[^0-9\.]+/g, ''));
  const splittedVersion = (pos) => {
    if (currentVersion().split('.').length === 3) {
      return currentVersion().substr(0, pos);
    }
    return currentVersion();
  };

  return {
    ID: nextID.toString(),
    F_Version: currentVersion().split('.')[0].toString(),
    M_Version: splittedVersion(3).toString(),
    Version: currentVersion().toString(),
    Lines_of_code: value(1).toString(),
    Class: value(11).toString(),
    'Average_weighted_method_count_by_class_(CC)': value(34).toString(),
    Average_cyclomatic_complexity_by_class: value(33).toString(),
    Average_relative_System_complexity: value(35).toString(),
    'Average_bugs_by_class(Halstead)': value(39).toString(),
    'Average_defects_by_class_(Kan)': value(40).toString(),
    Composer: composer.toString(),
    interfaces: value(12).toString(),
    average_LCOM: value(15).toString(),
    logical_lines_of_code_by_class: value(7).toString(),
    logical_lines_of_code_by_method: value(8).toString(),
    Violations: (Number(value(46)) + Number(value(45)) + Number(value(44)) + Number(value(43))).toString(),
    Information: value(46).toString(),
    Warnings: value(45).toString(),
    Errors: value(44).toString(),
    Criticals: value(43).toString(),
    ...phpDependResult,
  };
};

const getComposerMetric = async () =>
  new Promise((resolve) => {
    fs.readFile(urlComposerMetric(), 'utf8', (_, html) => {
      const tagComposer = parse(html).querySelector('.bloc h4');
      resolve(tagComposer ? tagComposer.textContent.replace(/[^0-9\.]+/g, '') : '');
    });
  });

const initSheet = async () => {
  const doc = new GoogleSpreadsheet(DOC_ID);
  await doc.useServiceAccountAuth(credentials);
  await doc.loadInfo();
  return doc.sheetsByIndex[0];
};

const accessSheet = async (phpMetricsResult, phpDependResult) => {
  console.log('\n- Saving data on spreadsheet...');

  const sheet = await initSheet();
  const rows = await sheet.getRows();
  const nextID = rows.length + 1;
  const resultSplitted = phpMetricsResult.split('\n');
  const composer = await getComposerMetric();
  const newRow = newAnalysis(nextID, resultSplitted, phpDependResult, composer);
  await sheet.addRow(newRow, { raw: true });
};

module.exports = {
  initSheet,
  accessSheet,
};
