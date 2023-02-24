//Requerir de la paqueteria de colores para la linea de comandoss
require('colors');

//Para guardar los datos en el archivo de texto
const { guardarDB, leerDB } = require('./helpers/guardarArchivo.js');

//Importamos las funciones del helper
const {inquirerMenu, 
       pausaMenu,
       leerInput,
       listadoTareasBorrar,
       confirmar,
       mostrarListadoCheckList} = require('./helpers/inquirer.js');

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

    //Funcion que lee el archivo guardado
    const tareasDB = leerDB();

    //Verificamos que no sea nulo, para que asi podamos cargar tareas
    if( tareasDB ){
        tareas.cargarTareasFromArray( tareasDB );
    }

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
                tareas.listadoCompleto();
                //console.log(tareas.listadoArr);
                break;
            //'3. Listar tareas completadas'
            case '3':
                tareas.listadoCompletadas();
                break;
            //'4. Listar tareas pendientes'
            case '4':
                tareas.listadoPendientes();
                break;
            //'5. Completar tarea(s)'
            case '5':
                //Mostramos todas las tareas, y sus estados,y guardamos las ids de las que están completadas
                const ids = await mostrarListadoCheckList(tareas.listadoArr);
                //Enviamos las ids completadas
                tareas.toogleCompletada( ids );
                break;
            //'6. Borrar tarea'
            case '6':
                const id = await listadoTareasBorrar(tareas.listadoArr);
                const ok = await confirmar('¿Está seguro?');
                if( ok ){
                    tareas.borrarTarea( id );
                    console.log('Tarea borrada');
                }
                break;
            //'0. Salir'
            case '0':
                break;

        }

        guardarDB( tareas.listadoArr );

        await pausaMenu();

    }while( opt !== '0');
}

main();