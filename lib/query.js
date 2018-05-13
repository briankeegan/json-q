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
  if (!Array.isArray(object)) {
    if (selectorsMatch(selectors, object)) {
      out.push(object)
    }
    for (let key in object) {
      const value = object[key]
      if (key === 'subviews') {
        value.forEach(obj => recursiveIteration(obj, selectors, out))
      }
      if (typeof value === 'object') {
        recursiveIteration(object[key], selectors, out)
      }
    }
  }
  return out
}

module.exports = {
  recursiveIteration
}
