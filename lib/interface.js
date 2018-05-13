const { prompt } = require('inquirer')
const { failure, displayTree, mainScreen, help } = require('./messages')
const { recursiveIteration } = require('./query')
const { processArgument } = require('./selectors')

const loadCLI = (obj) => {
  const tree = obj
  mainScreen()
  const questions = [
    {
      name: 'username',
      type: 'input',
      message: 'Enter selector, or \'help\':',
      validate: function( input ) {
        const selectors = processArgument(input)
        switch (selectors) {
        case null:
          return failure()
        case '\\l':
          mainScreen()
          break
        case '\\h':
          return help()
        case '\\q':
          return true
        default:
          return displayTree(recursiveIteration(tree, selectors))
        }
      }
    }
  ]
  return prompt(questions)
}

module.exports = {
  loadCLI
}
