const { exec, spawn } = require('child_process');

// exec('ls -lac', (err, stdout, sterr) => {
//   if (err) {
//     console.error(err);
//     return false;
//   }
  
//   console.log(stdout);
// });

// exec('node modules/console.js', (err, stdout, sterr) => {
//   if (err) {
//     console.error(err);
//     return false;
//   }
  
//   console.log(stdout);
// })

let process = spawn('ls', ['-lac']);
console.log(`Connected: ${process.connected}`);

process.on('exit', (data) => {
  console.log(`Process ended: ${data}`);
});

process.stdout.on('data', (data) => {
  console.log(`Killed: ${process.killed}`);
  console.log(`Data: ${data.toString()}`);
});
