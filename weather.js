const fetch = require('node-fetch')
const logError = error => console.log(error)

exports.getTemp = ({ lat, lng }) => {
  const API_KEY = '&appid=3ebd043775d249fbc496124b897bc719'
  const ROOT_URL = 'http://api.openweathermap.org/data/2.5/weather?'

  fetch(`${ROOT_URL}lat=${lat}&lon=${lng}${API_KEY}`)
    .then(response => {
      response.json()
        .then(json => {
          console.log(`${(json.main.temp - 273.15).toFixed(2)}°C`)
        }).catch(logError)
    }).catch(logError)
}