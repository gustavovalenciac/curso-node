//El paquete uuid nos crea IDs unicas e irrepetibles en todo el mundo
const {v4: uuidv4} = require('uuid');
class Tarea {
    id = '';
    desc = '';
    completadoEn = null;

    constructor( desc ){
        this.id = uuidv4();
        this.desc = desc;
    }

}

module.exports = Tarea;