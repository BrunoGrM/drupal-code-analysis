const scanf = require('scanf');
const { init } = require('./init');
const { downloadProject } = require('./download');
const { extractProject } = require('./extract');
const { phpMetrics } = require('./phpMetrics');
const { phpDepend } = require('./phpDepend');
const { accessSheet } = require('./sheet');
const { exec } = require('child_process');
const { PROJECT_NAME, currentVersion, DOC_LINK } = require('./variables');

(async () => {
  console.log('- How many times do you want to run?');
  const times = scanf('%d');
  let count = 1;
  for (const _ of Array.from({ length: times })) {
    await init();
    const begin = Date.now();
    console.log(`==== Project Analysis - ${PROJECT_NAME} ${currentVersion()} (${count}/${times}) ====`);
    await downloadProject();
    await extractProject();
    const phpMetricsResult = await phpMetrics();
    const phpDependResult = await phpDepend();
    await accessSheet(phpMetricsResult, phpDependResult);
    const end = Date.now();
    console.log(`\n- Analysis ${PROJECT_NAME} ${currentVersion()} completed!`);
    console.log(`- Process finished in: ${((end - begin) / 1000).toFixed(2) + 's!'}`);
    console.log(`- Access data in: ${DOC_LINK}`);
    exec('finish.mp3');
    count++;
  }
})();
