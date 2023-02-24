//paquete para realizar paquetes HTTP, trabajo bajo promesas
const axios = require('axios');

class Busquedas {

    historial = ['Tegucigalpa', 'Madrid', 'San José'];

    constructor(){
        //TODO: leer DB si existe
    }

    get paramsMapbox(){
        return{
            'access_token': 'pk.eyJ1IjoiZ3VzdGF2by12YWxlbmNpYTEiLCJhIjoiY2xlaXloNXJ1MDYxNjN5cGI1d2VpcTE1YSJ9.-fzgMcWNMKnhwMzzZPLxLw',
            'limit': 5,
            'language': 'es'
        }
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
            console.log(resp.data);

            /*const resp = await axios.get('https://reqres.in/api/users?page=2');
            console.log(resp.data);*/

            return [];  //Retornar los lugares
        
        }catch(error){
            return [];
        }

    }
}

module.exports = Busquedas;