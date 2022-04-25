// Process is global
// const p = require('process');

console.log('Helloooo clarice');

process.on('beforeExit', () => {
  console.log('The process is going to end');
});

process.on('exit', () => {
  console.log('The process has ended');
  setTimeout(() => {
    console.log('wont me shown, we are disconected from event loop');
  }, 0);
});

// uncaughtException
// unhandledRejection
// uncaughtExceptionMonitor
process.on('uncaughtException', (err, origin) => {
  console.log('Hey we forgot to catch some error');
  console.log(err);
  setTimeout(() => {
    console.log('Will be shown, we are on exceptions');
  }, 0);
});

// Example of an uncaught exception
// functionNotexist();

console.log('If error isnt catched wont show');