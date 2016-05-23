var axios =require('axios');

const OPEN_WEATHER_MAP_URL ='http://api.openweathermap.org/data/2.5/weather?&appid=8a1bcc986731c080d76b67f4b0dfc7b9&units=metric';

//8a1bcc986731c080d76b67f4b0dfc7b9

module.exports = {
    getTemp: function(location){
        var encodedLocation = encodeURIComponent(location);
        var requestUrl =`${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
        
        return axios.get(requestUrl).then(function(res){
            if (res.data.cod && res.data.message){
                throw new Error(res.data.message)
            } else{
               // console.log('Erfolgreiche Temperatur:'+ res.data.main.temp);
                return res.data.main.temp;
            }
        },function(res){
          throw new Error (res.data.message);   
        }); 
    }
}