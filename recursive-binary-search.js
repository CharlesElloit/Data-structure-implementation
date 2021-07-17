/**
 Recursive Binary Search Implementation in JavaScript.
*/

/**
 * @param {Array} list - The list you want to search.
 * @param {Number} target - The number you're searching for.
 * @returns {Boolean} true / /false - weither the number is in the list or not.
 */

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
const test = (result) => "Target found: " + result;

const list = [1, 2, 4, 5, 7, 8, 9];
const result = recursiveBinarySearch(list, 9);
console.log(test(result));
const result2 = recursiveBinarySearch(list, 10);
console.log(test(result2));
