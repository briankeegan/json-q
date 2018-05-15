const selectorsMatch = (selInput, treeObj) => (
  Object.keys(selInput).every(key => {
    if (treeObj[key]) {
      if (key === 'classNames') {
        return selInput[key].every(item =>
          treeObj[key].indexOf(item) > -1)
      }
      return selInput[key] === treeObj[key]
    }
  })
)

const recursiveIteration = (object, selectors, out = []) => {
  if (Array.isArray(object)) {
    for (let o of object) {
      if (typeof o === 'object') {
        recursiveIteration(o, selectors, out)
      }
    }
  } else if (typeof object === 'object') {
    if (selectorsMatch(selectors, object)) {
      out.push(object)
    }
    for (let key in object) {
      if (typeof object[key] == 'object') {
        recursiveIteration(object[key], selectors, out)
      }
    }
  }
  return out
}

module.exports = {
  recursiveIteration
}
