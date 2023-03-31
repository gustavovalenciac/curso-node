const fs = require('fs');
//paquete para realizar paquetes HTTP, trabajo bajo promesas
const axios = require('axios');

class Busquedas {

    historial = [];
    dbPath = './db/database.json';

    constructor(){
        //TODO: leer DB si existe
        this.leerDB();
    }

    get paramsMapbox(){
        return{
            'access_token': process.env.MAPBOX_KEY,
            'limit': 5,
            'language': 'es'
        }
    }

    get paramsWeather(){
        return{
            appid: process.env.OPENWEATHER_KEY,
            units: 'metric',
            lang: 'es'
        }
    }

    get historialCapitalizado(){
        return this.historial.map( lugar => {
            let palabras = lugar.split(' ');
            palabras = palabras.map( p => p[0].toUpperCase() + p.substring(1) );

            return palabras.join(' ');
        });
    }

    //Es asincrono poque haremos peticiones HTTP mas alrato
    async ciudad(lugar = ''){

        try{
            //peticion http
            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
                params: this.paramsMapbox
                
            });

            const resp = await instance.get();
            //const resp = await axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/madrid.json?language=es&access_token=pk.eyJ1IjoiZ3VzdGF2by12YWxlbmNpYTEiLCJhIjoiY2xlaXloNXJ1MDYxNjN5cGI1d2VpcTE1YSJ9.-fzgMcWNMKnhwMzzZPLxLw');
            return resp.data.features.map(lugar => ({
                id: lugar.id,
                nombre: lugar.place_name,
                lng: lugar.center[0],
                lat: lugar.center[1]
            }));

            /*const resp = await axios.get('https://reqres.in/api/users?page=2');
            console.log(resp.data);*/
        
        }catch(error){
            return [];
        }

    }

    async climaLugar( lat, lon){
        try{
            //Instancia axios
            const instance = axios.create({
                baseURL: `https://api.openweathermap.org/data/2.5/weather?`,
                params: {...this.paramsWeather, lat, lon}
            });

            const resp = await instance.get();
            const {weather, main} = resp.data;

            return {
                desc: weather[0].description,
                min: main.temp_min,
                max: main.temp_max,
                temp: main.temp
            }
        }catch( error ){
            console.log(error);
        }
    }

    agregarHistorial( lugar = '' ){
        
        //TODO: prevenir duplicados
        if(this.historial.includes( lugar.toLocaleLowerCase() ) ){
            return;
        }
        this.historial = this.historial.splice(0,5);

        this.historial.unshift( lugar.toLocaleLowerCase() );

        //grabar en db
        this.guardarDB();
    }

    guardarDB(){    
        const payload = {
            historial: this.historial
        }
        fs.writeFileSync(this.dbPath, JSON.stringify( payload ));
    }

    leerDB(){
        if( !fs.existsSync( this.dbPath ) ) return ;
        const info = fs.readFileSync( this.dbPath, {encoding: 'utf-8'} );
        const data = JSON.parse( info );
        this.historial = data.historial;
    }

}

module.exports = Busquedas;