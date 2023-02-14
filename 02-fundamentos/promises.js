const empleados = [
    {
        id:1,
        nombre: 'Gustavo'
    },
    {
        id:2,
        nombre: 'valencia'
    },
    {
        id:3,
        nombre: 'testeo'
    }
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id:2,
        salario: 1500
    }
];
const id = 10;

const getEmpleado = (id) => {

    return new Promise( (resolve, reject) => {
        const empleado = empleados.find( e => e.id === id)?.nombre;

        ( empleado )
            ? resolve( empleado )
            : reject(`NO existe empleado con id ${id}`);
        
    } );

}

const getSalario = (id) => {
    return new Promise( (resolve, reject) => {
        const salario = salarios.find( e => e.id === id)?.salario;

        ( salario )
            ? resolve( salario )
            : reject(`No existe salario con id ${id}`);
    });
}

/*getEmpleado(id)
    .then(empleadoo => console.log( empleadoo ))
    .catch(err => console.log(err));

getSalario(id)
    .then(salarioo => console.log(salarioo))
    .catch(err => console.log(err));*/


//Promise Hell
/*getEmpleado(id)
    .then( empleado => {
        getSalario( id )
            .then( salario => {
                console.log('El empleado:',empleado,' tiene un salario de: ',salario);
            })
            .catch( err => console.log( err ));
    })
    .catch( err => console.log(err));*/

//Promesas en cadena
let nombre;
getEmpleado(id)
    .then( empleado => {
        nombre = empleado;
        return getSalario(id);
    })
    .then( salario => console.log( 'El empleado:',nombre,' tiene un salario de: ',salario ))
    .catch( err => console.log( err ));