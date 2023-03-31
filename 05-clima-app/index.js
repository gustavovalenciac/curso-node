require('dotenv').config();

const { leerInput, inquirerMenu, pausaMenu, listarLugares } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");

const main = async() => {

    //variable que guardara la opcion escogida por el usuario
    let opt = null;
 
    //Instancia de busqueda
    const busquedas = new Busquedas();

    do {

        //Llamamos a la funcion  inquirerMenu de inquirer.js, esta funcion mostrara las opciones para el usuario, y guardara el value correspondiente
        opt = await inquirerMenu();

        //La opción escogida se evalua en una sentencia switch
        switch(opt){
            //Salir
            case 0:
                break;
            //Buscar ciudad
            case 1:
                //Mostrar mensaje
                const termino = await leerInput('Ciudad: ');
                
                //Buscar los lugares
                const lugares = await busquedas.ciudad(termino);

                //Seleccionar el lugar
                const id = await listarLugares(lugares);
                if( id === '0') continue;

                const lugarSel = lugares.find( l => l.id == id);
                
                
                //Guardar en db
                busquedas.agregarHistorial( lugarSel.nombre);

                //Clima
                const clima = await busquedas.climaLugar(lugarSel.lat,lugarSel.lng);
               
                //Mostrar resultados
                console.clear();
                console.log('\nInformacion de la ciudad\n'.green);
                console.log('Ciudad: ',lugarSel.nombre.green);
                console.log('Lat: ',lugarSel.lat);
                console.log('Lng: ',lugarSel.lng);
                console.log('Temperatura: ', clima.temp);
                console.log('Minima: ',clima.min);
                console.log('Maxima: ',clima.max);
                console.log('Como esta el clima: ',clima.desc.green);

                break;
            //Historial
            case 2:
                busquedas.historialCapitalizado.forEach( (lugar, i) => {
                    const idx = `${i+1}.`.green;
                    console.log(`${idx} ${lugar}`);
                });
                break;
        }
        if( opt !== 0) await pausaMenu();
    } while ( opt !== 0);
}

main();