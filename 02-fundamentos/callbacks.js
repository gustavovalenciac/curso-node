//setTimeout( function(){
//    console.log('Hola Mundo');
//},1000);

const getUsuarioByID = ( id , cb ) => {
    const usuario = {
        id, 
        nombre: 'gus' 
    }

    setTimeout( () => {
        cb(usuario);
    },1500);
}

getUsuarioByID( 10 , ( usuario ) => {
    console.log( usuario );
});