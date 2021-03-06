const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=44cffa54a5c7c62571836e252ce32ad3&query=' + latitude + ',' + longitude + '&units=f'
    request({ url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0]+ '. It is currently ' + body.current.temperature + ' degrees out, and feels like ' + body.current.feelslike + ' degrees. The humidity is ' + body.current.humidity + '% and the visibility is ' + body.current.visibility + ' km. The local time is ' + body.location.localtime)
        }
    })
}

module.exports = forecast