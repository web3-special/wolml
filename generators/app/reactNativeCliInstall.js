require('colors');
const spawn = require('child_process').spawn;

module.exports = function(options) {
  console.log('Installing react-native-cli...'.cyan);
  return new Promise(function (resolve, reject) {
    const ls = spawn('yarn', ['global', 'add', 'react-native-cli']);

    ls.stdout.on('data', (data) => {
      if (options.verbose) {
        console.log(data);
      }
    });

    ls.stderr.on('data', (data) => {
      if (options.verbose) {
        console.log(data.red);
      }
    });

    ls.on('close', (code) => {
      if (code === 0) {
        console.log('Latest react-native-cli installed'.green);
        resolve();
      } else {
        console.log('react-native-cli install failed. Turn verbose mode on for detailed logging'.red);
        reject();
      }
    });
  });
}
