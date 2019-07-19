const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad que quieres saber el clima',
        demand: true
    }
}).argv

const getInfo = async (direccion) => {
    try{
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return console.log(`El clima de ${direccion} es de ${temp}`)
    }catch(e) {
        console.log(`No se pudo encontrar el clima para ${direccion}`)
    }
}
getInfo(argv.direccion);