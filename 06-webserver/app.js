const express = require('express')
const app = express()
const port = 8082;

//Servir contenido estático
app.use( express.static('public') ); //Pagina de inicio   /

app.get('/generic', (req, res) => {
    res.sendFile(__dirname + '/public/generic.html');
});

app.get('/elements', (req, res) => {
    res.sendFile(__dirname + '/public/elements.html');
});

//Comodin, para cualquier otra URL 
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
});

//Escuchando en el puerto
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})