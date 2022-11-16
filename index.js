/**
 * Returns the first element in the array that causes the callback to return `true`. Otherwise, returns `undefined`.
 * @param {*[]} array - An array of elements. Could be anything!
 * @param {function} callback - A callback that accepts a single argument. Returns a value.
 * @returns {*|undefined} The first element that causes the callback to return a truthy value. Otherwise, returns `undefined`.
 *
 * EXAMPLE:
 *  find([1, 2, 3], (element) => element > 1);
 *  //> 2
 *
 * EXAMPLE:
 *  find([1, 2, 3], (element) => element < 0);
 *  //> undefined
 */
function find(array, callback) {
  for (let element of array) {
    //--^goes through the array values with for..of loop as element is the variable to return

    if (callback(element))
      //---^if element value is found w/i callback return the element value accordingly 

      return element

  }
  //if else statement would cause the conditon not to run aka the if statement

}

/**
 * Returns an array of all elements in the array that cause the callback to return `true`. If the array is empty or no elements cause the callback to return `true`, then return an empty array.
 * @param {*[]} array - An array of elements. Could be anything!
 * @param {function} callback - A callback that accepts a single argument. Returns a value.
 * @returns {*[]} An array of filtered values. Potentially empty.
 *
 * EXAMPLE:
 *  filter([1, 2, 3], (element) => element > 1);
 *  //> [2, 3]
 *
 * EXAMPLE:
 *  filter([1, 2, 3], (element) => element < 0);
 *  //> []
 */
function filter(array, callback) {
  const result = [];
  for (let element of array) {
    //---^ w/ element as the variable name to retrieve out of the array, a for...of loop will go through the array

    if (callback(element)) {
      //---^if element value is found w/i callback return the element value accordingly 

      result.push(element)
      //---^pushes element value into the empty array aka result when the values are fouund true after loop 
    }

  }

  return result;//returns emptry array if theres no element value
}

/**
 * Returns an array where each element is transformed by the callback. If the array is empty, return an empty array.
 * @param {*[]} array - An array of elements. Could be anything!
 * @param {function} callback - A callback that accepts a single argument. Returns a value.
 * @returns {*[]} An array of transformed elements. The length of this array should be the same as the inputted array.
 *
 * EXAMPLE:
 *  map([1, 2, 3], (element) => element + 10);
 *  //> [11, 12, 13]
 *
 * EXAMPLE:
 *  map([], (element) => element < 0);
 *  //> []
 */
function map(array, callback) {
  const result = [];
  for (let element of array) {

    result.push(callback(element))
    //---^ no if statement needed b/c you are transforming the callback w/i result option

  }
  return result;
}

/**
 * Does not return anything. Passes each element of the array into the callback along with the index and the array, in that order.
 * @param {*[]} array - An array of elements. Could be anything!
 * @param {function} callback - A callback that accepts three arguments: element, index, and the entire array.
 *
 * EXAMPLE:
 *  forEach([10, 20, 30], (element, index, array) => {
 *    console.log(element, index, array.length)
 *  });
 *  //> 10 0 3
 *  //> 20 1 3
 *  //> 30 2 3
 */
function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {

    callback(array[i], i, array)
    //---^array[i] is the desried element;i is the index,array is the actual array in whole passing/being accepted by function parameter callback,no return needed

  }
  //no return needed b/c callback the parameter is where the desired information is placed into
}

// Do not change the code below this line.
module.exports = { find, filter, map, forEach };
