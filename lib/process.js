const fetch = require('isomorphic-fetch')
const { readFile, existsSync } = require('fs')

// Backup, in case no paramter was provided
const defaultURL = 'https://raw.githubusercontent.com/jdolan/quetoo/master/src/cgame/default/ui/settings/SystemViewController.json'

// Make into promise, more consistent with rest of program
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

// in either case returning promsie
const getData = (path = defaultURL) => {
  if (existsSync(path)) {
    return readJSONFile(path)
  }
  return fetchJSON(path)
}

module.exports = {
  getData
}
