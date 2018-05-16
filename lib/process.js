const fetch = require('isomorphic-fetch')
const { readFile, existsSync } = require('fs')

const defaultURL = 'https://raw.githubusercontent.com/jdolan/quetoo/master/src/cgame/default/ui/settings/SystemViewController.json'

const readJSONFile = path => (
  new Promise((resolve,reject) => {
    readFile(path, (err, data) => {
      if(err) return reject(err)
      resolve(JSON.parse(data))
    })
  })
)

const fetchJSON = url => (
  fetch(url)
    .then(response => response.json())
)

const getData = (path = defaultURL) => {
  if (existsSync(path)) {
    return readJSONFile(path)
  }
  return fetchJSON(path)
}

module.exports = {
  getData
}
