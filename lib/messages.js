const chalk = require('chalk')
const figlet = require('figlet')
const clear = require('clear')
const util = require('util')

const mainScreen = () => {
  clear()
  console.log(
    chalk.yellow(
      figlet.textSync('JSON TREE',  {
        font: 'Doom',
        horizontalLayout: 'default',
        verticalLayout: 'default'
      })
    )
  )
}

const exit = () => {
  console.log(chalk.yellow('Exitting program'))
}

const displayTree = array => {
  if (array.length === 0){
    return (failure('No results found'))
  }
  array.forEach((obj, i) => {
    console.log(
      chalk.blue(`\n~~~~~~~~~~~~~~~~~~~~~~index[${i}]~~~~~~~~~~~~~~~~~~~~~~~~\n`),
      util.inspect(obj, {
        compact: false,
        depth: null,
        colors: true,
        breakLength: 80
      }
      )
    )
  })
}

const failure = (message = 'Please enter a valid selector or type \'help\'') => (
  chalk.red(message)
)

const help = () => (
  chalk.green('Please enter a valid selector or type \'help\'')
)


module.exports = {
  mainScreen,
  exit,
  displayTree,
  failure,
  help
}
