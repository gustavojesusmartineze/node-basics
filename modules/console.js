console.log('This is regular message');
console.info('This is regular message');
console.error('This is an error message');
console.warn('This is a warning message');

// This can print a table
let table = [{a: 1, b: 'A'},{a: 2,b: 'B'}]
console.log(table);
console.table(table);


// This can group logs.

console.group('Conversation');
console.log('Hello');
console.group('Blah');
console.log('blah blah bla #1');
console.log('blah blah bla #2');
console.log('blah blah bla #3');
console.log('blah blah bla #4');
console.groupEnd('Blah');
console.log('Good bye');
console.groupEnd('Conversation');


console.log('Something of other logs');

// Counters
console.count('times');
console.count('times');
console.count('times');
console.count('times');
console.count('times');
console.count('times');
// Restart Counter.
console.countReset('times');
console.count('times');


// Timers
console.time('**ExecutionTime**')
for(let i = 0; i < 50; i++){
		// Contador
    console.count('Ronda: ')
}
console.timeEnd('**ExecutionTime**') // Inicio: 2.381ms