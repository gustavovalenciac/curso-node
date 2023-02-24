const fs = require('fs');
const archivo = './db/data.json';

const guardarDB = ( data ) => { 
    fs.writeFileSync( archivo, JSON.stringify(data));
}

const leerDB = () => {
    //No existe el archivo
    if(!fs.existsSync(archivo)){
        return null
    //Si existe el archivo
    }else{
        const info = fs.readFileSync(archivo, {encoding: 'utf-8'});
        //Si hay informacion
        if(info){
            const data = JSON.parse(info);
            //Si están en formato JSON
            if(data){
                return data; //Regresamos la data correspondiente
            //Si no están en formato JSON
            }else{
                return false;
            }
        //Si no hay informacion
        }else{
            return false;
        }
    }
}

module.exports = {
    guardarDB,
    leerDB
}