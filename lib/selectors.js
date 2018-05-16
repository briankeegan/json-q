const processArgument = (input) => {
  // this splits, but includes divider...
  const selectors = input.split(/(\.|#)/)
  let out = {}
  while (selectors.length > 0) {
    let value = selectors.shift()
    // Below is important for edge case '.container' will have an emptry string before
    if (value === '') continue
    if (value.indexOf('.') > -1) {
      (out.classNames = out['classNames'] || [])
        .push(selectors.shift())
    } else if (value.indexOf('#') > -1) {
      // If there are more than one indentifier, it's an invalid query
      if (out['identifier']) return null
      out['identifier'] = selectors.shift()
    } else {
      out.class = value
    }
  }
  return out
}

module.exports = {
  processArgument
}
