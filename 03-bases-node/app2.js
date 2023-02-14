const {mkFile} = require('./helpers/multiplicar');

console.clear();

//Con process argv puede guardarse los argumentos pasados por comandos
const [,,arg3 = 'base=5'] = process.argv;
const [,base=5] = arg3.split('=');
console.log(base);