const yargs = require('yargs')
const geocode = require('./geocode')
const weather = require('./weather')

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      string: true,
      describe: 'Address you want to search'
    }
  })
  .help()
  .alias('help', 'h')
  .argv

function getWeather () {
  geocode.getCoordinates(argv.address, weather.getTemp)
}

getWeather()