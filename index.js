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
  for (let element of array) /* so this loops through the array its looking for the argument given, in this case the argument is "callback" this could be named anything. Essentially this is a placeholder. If you look at the index.test js test the value given is 20! */  /* this is ur opening bracket inside of it tell the function what you need it to do>> */{
    if (callback(element)){
      return element
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
function filter(array, callback)/* map ALWAYS turn a new array so the next line you have to declar an array
*/ {
  const result = [];/* so this is where you declare an array */
  for (let element of array) // this is where we loop, this for loop is looking for the "callback', aka the value that is going to be given in this case 1,2,3,--its inside the list of "elements in an array" >> then go to opening code block // 
  {
    if (callback(element))/* this if statment is the say run this code only if these circumstances meet if you can find the callback inside the list of elements then do this >>> create code block*/{
      result.push(element) /* the result is a new array, so push is a operator to maniupulate and put information which is the element we found in the new array*/ 
    } // this is the for loop finish return the final array which is name result OUTSIDE the for loop!
  }
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
 */
function map(array, callback) {/* map ALWAYS turn a new array so the next line you have to declar an array
 */
  const result = [];/* so this is where you declare an array */
  for (let element of array) /* this is your for loop its looking for the element determined by "callback" which is a place holder representing the value we are looking for >>> this is your opening bracket */{
    return result.push(callback(element)) /* bc Map produces an array, when you find the value you have to put it inside of the array.  this line is saying hey we found the "element you was looking for" its just called "callback"(element). so we are going put this inside of an array hence "result" is an array.  The syntax looks like 'return result.push(callback(element))' "result" the new arrary.push(to put the answer inside of it ) then callback the answer we are looking for, and element inside the array   */
  }
  return result; // then we return "result" which is the name of the new array
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
function forEach(array, callback) {// foreach function ONLY loops through the array
  for (let i = 0; i < array.length; i++) /* this for loop is starting at the 0 index of the array and will check for the number or item at each iteration >> this bracket begins the code if conditional*/{
    if (callback(array[i], i, array))/* in the test should pass the element in this case the , the index, and the array into the callback, in that order", const callback = (element, index, array)*/{
      console.log(array[i], i, array.length) /* hence array[i]= the precise element in the array */
     }
    }
  }


// Do not change the code below this line.
module.exports = { find, filter, map, forEach };
