//Requerir de la paqueteria de colores para la linea de comandoss
require('colors');

//Importamos las funciones del helper
const {inquirerMenu, 
       pausaMenu,
       leerInput} = require('./helpers/inquirer.js');

//guardamos en constante la funcion tarea de  tarea
//guardamos en constante la funcion tareas de tareas
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');
console.clear();

const main = async() => {
    //variable que guardara la opcion escogida por el usuario
    let opt = '';
    //Instancia de Tareas
    const tareas = new Tareas();

    //Entramos al do-while y salimos hasta que la opcion escogida por el usuario sea 0
    do{
        //Llamamos a la funcion  inquirerMenu de inquirer.js, esta funcion mostrara las opciones para el usuario, y guardara el value correspondiente
        opt = await inquirerMenu();

        //La opción escogida se evalua en una sentencia switch
        switch(opt){
            //'1. Crear tarea'
            case '1':
                const desc = await leerInput('Descripción: ');
                tareas.crearTarea( desc );
                break;
            //'2. Listar tareas'
            case '2':
                console.log(tareas._listado);
                break;
            //'3. Listar tareas completadas'
            case '3':
                break;
            //'4. Listar tareas pendientes'
            case '4':
                break;
            //'5. Completar tarea(s)'
            case '5':
                break;
            //'6. Borrar tarea'
            case '6':
                break;
            //'0. Salir'
            case '0':
                break;

        }

        await pausaMenu();

    }while( opt !== '0');
}

main();