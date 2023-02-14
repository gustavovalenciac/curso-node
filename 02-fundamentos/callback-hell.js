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

const getEmpleado = (id, cb) => {
    const empleado = empleados.find( e => e.id === id);

    if( empleado ){
        cb(null,empleado)
    } else {
        cb(`Empleado con id ${ id } no existe`);
    }
}

const getSalario = (id, cb) => {
    const salario = salarios.find( e => e.id === id)?.salario;
    if( salario ){
        cb(null, salario);
    }else{
        cb(`Empleado con id ${ id } no existe`);
    }
}

getEmpleado( 10, ( err, empleado ) => {
    if( err ){
        console.log('ERROR!');
        return console.log(err);
    }
    console.log('Empleado existe!');
    console.log(empleado);
});

getSalario(1, (err, salario) => {
    if( err ){
        console.log('ERROR!');
        return console.log(err);
    }
    console.log('Empleado existe!');
    console.log(salario);
});