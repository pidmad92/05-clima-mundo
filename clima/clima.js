const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=db1dd197b60a9e1f0485a6780c180f0f&units=metric`);

    return resp.data.main.temp;

};

module.exports = {
    getClima
};