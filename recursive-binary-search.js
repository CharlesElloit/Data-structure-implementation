/**
 Recursive Binary Search Implementation in JavaScript.
*/

/**
 * @param {Array} list - The list you want to search.
 * @param {Number} target - The number you're searching for.
 * @returns {Boolean} true / /false - weither the number is in the list or not.
 */

// Recursive Binary Search
const recursiveBinarySearch = (list, target) => {
    if (list.length === 1 && list[0] != target)
        return false;
    else {
        const midpoint = Math.floor(list.length / 2);
        if (list[midpoint] === target)
            return true;
        else {
            if (list[midpoint] < target) {
                return recursiveBinarySearch(list.slice(midpoint + 1), target);
            }
            else {
                if (list[midpoint] > target)
                    return recursiveBinarySearch(list.slice(0, midpoint), target);
            }
        }
    }
};


// None Recursive Binary Search
const noneRecurisevBinarySearch = (list, target) => {
  let left = 0;
  let right = list.length - 1;
  while(left <= right) {
    const midPoint = Math.floor((left + right) / 2);
    if(list[midPoint] === target) {
      return midPoint;
    }
    else if (target < list[midPoint]) {
      right = midPoint - 1
    }
    else{
      left = midPoint + 1
    }
  }
  return -1;
}

const test = (result) => "Target found: " + result;

const list = [1, 2, 4, 5, 7, 8, 9];

const recursiveBinarySearchResults = recursiveBinarySearch(list, 8);
console.log(test(recursiveBinarySearchResults));

const noneRecursiveBinarySearchResults = noneRecurisevBinarySearch(list, 4);
console.log(test(noneRecursiveBinarySearchResults));
