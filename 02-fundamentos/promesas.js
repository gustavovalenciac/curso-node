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

const getEmpleado = ( id ) => {

    const promesa = new Promise( (resolve, reject) => {
        const empleado = empleados.find( s => s.id == id )?.nombre
        if( empleado ){
            resolve( empleado );
        }else{
            reject(`No existe empleado con id ${ id }`);
        }
    } );

    return promesa;

}

const getSalario = ( id ) => {

    const promesa = new Promise( (resolve, reject) => {
        const salario = salarios.find( e => e.id == id)?.salario;

        (salario)
            ? resolve(salario)
            : reject(`No existe salario con id ${ id }`);
    })

    return promesa;
}

const id = 1;
getEmpleado( id )
    .then( empleado => console.log(empleado) )
    .catch( err => console.log(err) );

getSalario( id )
    .then( salario => console.log(salario) )
    .catch( err => console.log(err) );

/*const getSalario = ( id, cb ) => {

    const salario = salarios.find( s => s.id === id)?.salario;

    if( salario ){
        cb( null. salario);
    }else{
        cb(`No existe salario para el id ${ id }`);
    }
}*/