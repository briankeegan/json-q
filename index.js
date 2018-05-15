#!/usr/bin/env node
require('es6-promise').polyfill()
const { loadCLI } = require('./lib/interface')
const { getData } = require('./lib/process')
const { loadCommands } = require('./lib/commands')

loadCommands()

getData(process.argv[2])
  .then(loadCLI)
