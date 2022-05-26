const request = require('request')

const geocode = (address, callback) => {
    url = "https://api.openweathermap.org/geo/1.0/direct?q=" + encodeURIComponent(address) + "&limit=5&appid={APIKEY}"

    request({url, json: true}, (error, response) => {
        if(error) {
            callback("Unable to connect", undefined)
        } else if ( response.body.length === 0) {
            callback("Not Found", undefined)
        } else {
            callback(undefined, {
                latitude: response.body[0].lat,
                longitude: response.body[0].lon,
                location: response.body[0].name
            })
        }
    }) 

}

module.exports = geocode
