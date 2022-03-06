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

//creates a function called find that takes in a parameter array and the function callback
function find(array, callback) {
  //for loop through the array iterating each element
  for (let element of array) {
  // console.log(callback(element));

    //conditional statement if callback element which is less than 1 is equal to the element of the array is true
    if(callback(element) === true ){

      //then return the element of that array
      return element;
    } 
      
    }

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

//creates a function called filter with an array and a callback function 
function filter(array, callback) {

  //creates an empty array called result
  const result = [];

  //loop through the array iterating each element
  for (let element of array) {
    //if the callback element match the element iterataion through the arry is true 
    if(callback(element) === true){

      //push that element into the empty array result
      result.push(element)
    }
  }
  //return result with the matching elements pushed inside
  return result;
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
 *///

 //creates a function called map with the parameters array and the callback function 
function map(array, callback) {

  //creates an empty array called result
  const result = [];

  //for loop through the array 
  for (let element of array) {

    //the callback function tranforms * 10 the element at the iteration through the array and pushes it into the empty array result
    result.push(callback(element))


  }
  //return array with the transformed elements inside 
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

//creates a function called forEach with the parameters array and the callback function 
function forEach(array, callback) {

  //loop through the array 
  for (let i = 0; i < array.length; i++) {

    //prints the array element, array index and array
    callback(array[i],i,array)
  }
}

// Do not change the code below this line.
module.exports = { find, filter, map, forEach };
