const http = require('http');

http.createServer( (req, res) => {
    
    /*res.setHeader('Content-Disposition','attachment; filename=lista.csv');
    res.writeHead(200, {'Content-Type': 'application/json'});    
    res.writeHead*/

    res.write('test');
    res.end();
}).listen( 8082 );

console.log('Escuchando el puerto', 8082);