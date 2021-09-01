function find(array, callback) {
  for (let element of array) {
    if (callback(element)) {
      return element;
    }
  }
  return undefined;
}

function filter(array, callback) {
  const result = [];
  for (let element of array) {
    if (callback(element)) {
      result.push(element);
    }
  }
  return result;
}

function map(array, callback) {
  const result = [];
  for (let element of array) {
    element = callback(element);
    result.push(element);
  }
  return result;
}

function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}

// Do not change the code below this line.
module.exports = { find, filter, map, forEach };
