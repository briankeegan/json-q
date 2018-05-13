#!/usr/bin/env node
const { loadCLI } = require('./lib/interface')
const { exit } = require('./lib/messages')
const { getData } = require('./lib/fetch')

getData()
  .then(loadCLI)
  .then(exit)
