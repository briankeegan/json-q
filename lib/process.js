const fetch = require('isomorphic-fetch')
const { readFile, existsSync } = require('fs')

const readJSONFile = path => (
  new Promise(function(resolve,reject){
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

const getData = (path = 'json/SystemViewsControllers.json') => {
  if (existsSync(path)) {
    return readJSONFile(path)
  }
  return fetchJSON(path)
}

module.exports = {
  getData
}
