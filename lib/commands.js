const { exit, mainScreen } = require('./messages')

const loadCommands = () => {
  process.stdin.setRawMode(true)
  process.stdin.on('keypress', (chunk, key) => {
    // exit with ctrl-c
    if(key && key.name === 'c' && key.ctrl) {
      exit()
      process.exit()
    }
    // clear screen with crtl-l
    if(key && key.name === 'l' && key.ctrl) {
      mainScreen()
    }
  })
}

module.exports = {
  loadCommands
}
