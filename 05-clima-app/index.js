const { leerInput, inquirerMenu, pausaMenu } = require("./helpers/inquirer");
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
                const lugar = await leerInput('Ciudad: ');
                await busquedas.ciudad(lugar);
                //Buscar los lugares

                //Seleccionar el lugar

                //Clima

                //Mostrar resultados
                console.log('\nInformacion de la ciudad\n'.green);


                break;
            //Historial
            case 2:
                break;
        }
        if( opt !== 0) await pausaMenu();
    } while ( opt !== 0);
}

main();