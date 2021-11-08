const { exec } = require('child_process');
const { commandPhpMetrics } = require('./variables');

const phpMetrics = () => {
  console.log('\n- Starting PhpMetrics Analysis...');
  return new Promise((resolve) => {
    const child = exec(commandPhpMetrics());
    child.stdout.removeAllListeners('data');
    child.stderr.removeAllListeners('data');
    child.stdout.pipe(process.stdout);
    child.stderr.pipe(process.stderr);

    let analysisResult = '';
    child.stdout.setEncoding('utf8');
    child.stdout.on('data', (data) => {
      if (data.toString().includes('Lines of code')) {
        analysisResult = data.toString();
      }
    });

    child.on('close', () => {
      console.log('\n- Analysis completed!');
      resolve(analysisResult);
    });
  });
};

module.exports = {
  phpMetrics,
};
