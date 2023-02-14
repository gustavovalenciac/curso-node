const fs = require('fs');
const colors = require('colors');

const mkFile = ( base = 5, listar = false, hasta = 10 ) => {

    let path = `./salida/tabla-${base}.txt`;
    let salida = '';
    let consola = '';
    for(let i = 1; i <= hasta; i++){
        salida +=`${base} x ${i} = ${base * i}\n`;        
        consola +=`${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
    }

    if(listar){
        console.log('==================='.green);
        console.log('    Tabla del:'.green,colors.blue(base));
        console.log('==================='.green);
        console.log(consola);
    }
    
    return new Promise( (resolve, reject) => {
        fs.writeFileSync(path, salida);
        (fs.existsSync(path))
            ? resolve( path)
            : reject(path);

    });
}

module.exports = {
    //nombreComoSeImportara : funcion/variable a importar
    mkFile
}