const request = require("request")

const forecast = (latitude, longitude, callback) => {
    url = "https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + longitude + "&appid={APIKEY}&exclude=minutely,hourly,daily,alerts&units=metric"


    request({url, json: true}, (error, response) => {

        if (error) {
            callback("Unable to connect", undefined)
        } else if (response.body.error) {
            callback("Unable to find location", undefined)
        } 
        else {
            // console.log(response.body)
            // console.log(response.body.current.weather)
            callback(undefined, response.body.current.weather[0].description + ". Temperature is " + response.body.current.temp + "°C")
        }
    })
}

module.exports = forecast
