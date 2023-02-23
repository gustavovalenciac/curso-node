const Tarea = require('./tarea')
require('colors');
/**
 *  _listado:
 *      {'uuid-123712-123123-2: { id:12, desc: asd, completadoEn: 92231}'}
*/

class Tareas{
    _listado = {};
    
    constructor(){
        this._listado = {};
    }

    get listadoArr(){
        const listado = [];
        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key];
            listado.push( tarea );
        });
        return listado;
    }

    borrarTarea( id = ''){
        if(this._listado[id]){

        }
    }

    cargarTareasFromArray( tareas = []){
        tareas.forEach( tarea => {
            this._listado[tarea.id] = tarea;
        });
    }

    crearTarea(desc = ''){
        const tarea = new Tarea(desc)
        this._listado[tarea.id] = tarea;
    }

    //listar todas las Tareas | para la opcion 2
    listadoCompleto(){
        if(this.listadoArr.length != 0){
            this.listadoArr.forEach( (tarea, idx) => {
                //indice
                const i = `${idx+1}`.green;
                const { desc, completadoEn } = tarea;
                const estado = (completadoEn) ? 'Completada'.green : 'Pendiente'.red;
                console.log(`${ i }. ${ desc } :: ${ estado }`);
            });
        }else{
            console.log(`\n${'NO'.red} hay registros.`);
        }
        
    }

    //listar tareas completadas | para la opcion 3
    listadoCompletadas(){
        const estado = 'Completada'.green;
        let i = 1;
        let flag = false;
        if(this.listadoArr.length != 0){
            this.listadoArr.forEach(tarea => {
                const {completadoEn} = tarea;
                if(completadoEn){
                    flag = true;
                }
            });
            if(flag){
                this.listadoArr.forEach(tarea => {
                    const { completadoEn } = tarea;
                    if(completadoEn){
                        const {desc} = tarea;
                        console.log(`${ i.toString().green }. ${ desc } :: ${ estado }`);
                        i++;
                    }
                });
            }else{
                console.log(`\n${'NO'.red} hay registros completados.`);
            }
            
        }else{
            console.log(`\n${'NO'.red} hay registros.`);
        }
    }

    //listar tareas pendientes | para la opcion 4
    listadoPendientes(){
        const estado = 'Pendiente'.red;
        let i = 1;
        let flag = false;
        if(this.listadoArr.length != 0){
            this.listadoArr.forEach(tarea => {
                const {completadoEn} = tarea;
                if(!completadoEn){
                    flag = true;
                }
            });
            if(flag){
                this.listadoArr.forEach(tarea => {
                    const { completadoEn } = tarea;
                    if(!completadoEn){
                        const {desc} = tarea;
                        console.log(`${ i.toString().green }. ${ desc } :: ${ estado }`);
                        i++;
                    }
                });
            }else{
                console.log(`\n${'NO'.red} hay registros pendientes.`);
            }
            
        }else{
            console.log(`\n${'NO'.red} hay registros.`);
        }
    }
}

module.exports = Tareas;