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

//async - await
//await tiene que estar dentro de una funcion o metodo asincrono
const getInfoUsuario = async( id ) => {

    try{
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);

        return `El salario del empleado: ${empleado} es de ${salario}`;
    }catch(error){
        throw error;
    }

}

//Funcion normal
//getInfoUsuario();

//Cuando ponemos un async a una funcion , esta se vuelve  una promesa
const id = 3;
getInfoUsuario(id)
    .then( msg => console.log(msg))
    .catch( err => console.log(err));


