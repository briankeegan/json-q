const { prompt } = require('inquirer')
const { failure, displayTree, mainScreen, help } = require('./messages')
const { recursiveIteration } = require('./query')
const { processArgument } = require('./selectors')

const loadCLI = (obj) => {
  const tree = obj
  mainScreen()
  return prompt([
    {
      name: 'query',
      type: 'input',
      message: 'Enter selector, or \'-help\':',
      validate: function( input ) {
        const selectors = processArgument(input)
        switch (input) {
        case '':
          return failure()
        case '-help':
          help()
          break
        default:
          return displayTree(recursiveIteration(tree, selectors))
        }
      }
    }
  ])
}

module.exports = {
  loadCLI
}
