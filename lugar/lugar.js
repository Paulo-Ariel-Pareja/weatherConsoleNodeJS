const axios = require('axios');

const getLugarLatLng = async ( lugar ) => {
    const encoderURL = encodeURI(lugar);
    
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encoderURL}`,
        headers: {
            'X-RapidAPI-Key': '7797f014d7msh741634fa9f14431p1ab061jsn7f0fe85e0b90'
        }
    });
    
    const respuesta = await instance.get();
    if(respuesta.data.Results.length === 0) {
        throw new Error (`No se encontraron resultados para ${lugar}`);
    }
    
    const data = respuesta.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;
    return {
        direccion,
        lat,
        lng
    }
};

module.exports = {
    getLugarLatLng
}
