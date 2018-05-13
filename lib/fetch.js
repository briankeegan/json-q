require('es6-promise').polyfill()
const fetch = require('isomorphic-fetch')

const getData = () => (
  fetch('https://raw.githubusercontent.com/jdolan/quetoo/master/src/cgame/default/ui/settings/SystemViewController.json')
    .then(response => response.json())
)

module.exports = {
  getData
}
