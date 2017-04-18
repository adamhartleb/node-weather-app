const fetch = require('node-fetch')
const logError = error => console.log(error)

exports.getCoordinates = (address, callback) => {
  const encodedAddress = encodeURIComponent(address)
  const URL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`
  fetch(URL)
    .then(response => {
        response.json()
          .then(json => {
            if (json.status === 'ZERO_RESULTS') {
              throw 'Zero results. Please check the address you entered.'
            }
            callback({
              lat: json.results[0].geometry.location.lat,
              lng: json.results[0].geometry.location.lng
            })
          }).catch(logError)
    }).catch(logError)
}