#!/usr/bin/env node
require('es6-promise').polyfill()
const { loadCLI } = require('./lib/interface')
const { getData } = require('./lib/process')
const { loadCommands } = require('./lib/commands')

// commands such as ctrl-l and ctrl-c
loadCommands()

// Pass in user paramter if it exists
getData(process.argv[2])
// Pass JS object to interface
  .then(loadCLI)
