
const { mkFile} = require('./helpers/multiplicar');
const argv =require('./config/yargs');
require('colors');
//const colors = require('colors');

//Original
/*const argv = require('yargs').argv;
console.log(process.argv);
console.log(argv);
console.log('base: yargs', argv.base);*/


/*const { mkFile } = require('./helpers/multiplicar');

console.clear();

const base = 3;
*/
const makeFile = async(base, listar, hasta) =>{
    try{
        const path = await mkFile(base, listar, hasta);
        return path;
    }catch(error){
        throw error;
    }
}

makeFile(argv.b, argv.l, argv.h)
    .then(msg => console.log('se creo el archivo: ',msg.rainbow))
    .catch(err => console.log('no se creo el archivo: ',err));

/*console.clear();
console.log('   Tabla del 5');
console.log('===================');

const base = 5;
let salida = '';
for(let i = 1; i <= 10; i++){
    salida +=`${base} x ${i} = ${base * i}\n`;
}

console.log(salida);

fs.writeFileSync(`tabla-${base}.txt`, salida);

console.log(`tabla-${base}.txt creado`);*/

/*
fs.writeFile('tabla-5.txt', salida, (err) => {
    if (err) throw err;
    console.log('tabla-5.txt creado');
});*/