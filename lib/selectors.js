const processArgument = (input) => {
  const selectors = input.split(/(\.|#)/)
  if (input.length === 0) return null
  let out = {}
  while (selectors.length > 0) {
    let value = selectors.shift()
    if (value === '') continue
    if (value.indexOf('.') > -1) {
      (out.classNames = out['classNames'] || [])
        .push(selectors.shift())
    } else if (value.indexOf('#') > -1) {
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
