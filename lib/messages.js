const chalk = require('chalk')
const figlet = require('figlet')
const clear = require('clear')

const mainScreen = () => {
  clear()
  console.log(
    chalk.yellow(
      figlet.textSync('JSON-Q',  {
        font: 'Doom',
        horizontalLayout: 'default',
        verticalLayout: 'default'
      })
    )
  )
}

const exit = () => {
  console.log(chalk.yellow('\n>>  Exitting program.  Thanks for using JSON-Q'))
}

const createTextDivider= (text) => {
  let divider = text
  const len = process.stdout.columns
  while(divider.length < len) {
    divider = `~${divider}~`
  }
  return chalk.blue(`\n${divider.slice(0, len)}\n`)
}

const displayTree = array => {
  const len = array.length
  if (len === 0){
    return (failure('No results found'))
  }
  array.forEach((obj, i) => {
    console.log(
      createTextDivider(`index[${i}]`),
      JSON.stringify(obj, null, 4)
    )
  })
  console.log(createTextDivider(`${len} result${len > 1 ? 's' : ''} found)`))
}

const failure = (message = 'Please enter a valid selector or type \'help\'') => (
  chalk.red(message)
)

const help = () => {
  const message = chalk.magenta(`
This program takes a json object local file or the web and allows users to query it.  The results are displayed as JSON objects.  If input file is supplied, a default json object is used.

Query with:

  ${chalk.green('class')} - The view class name, e.g. "${chalk.green('StackView')}"
  ${chalk.blue('classNames')} - CSS class names, e.g. "${chalk.blue('.container')}"
  ${chalk.cyan('identifier')} - The view identifier, e.g. "${chalk.cyan('#videoMode')}"
  compound selectors e.g. "${chalk.green('CvarSelect')}${chalk.cyan('#multisample')}"
  selector chains e.g. "${chalk.green ('StackView')}${chalk.blue('.accessoryView')}${chalk.blue('.container')}"
      *note you can only use one identifer

  Clear the screen using ${chalk.yellow('ctrl-l')} and exit the program with ${chalk.yellow('ctrl-c')}`
  )
  console.log(message)
}


module.exports = {
  mainScreen,
  exit,
  displayTree,
  failure,
  help
}
