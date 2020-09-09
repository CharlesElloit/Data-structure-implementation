/*
  SET IMPLEMENTATION
  
  Little  notes:
     Remember you can also implement set using class instead of using a function.
     and by default JavaScript has Set class build in.
     A Set is a like an array expect that their are no duplicates
     so we going to use array but we going to implement the array 
     such that their are no duplicates
*/

function Set() {
  let collection = [];

  /*
    This method or function will check for the presence of an element
    and return true or false base on value passed in, weather it is in the 
    set or not
  */
  this.has = element => {
    return collection.indexOf(element) !== -1;
  };

  /* 
    This method will add an element to the set
    but first it will check if the value already exist in
    in the set, because if it is then it shouldn't be added 
    to the set,
  */
  this.add = element => {
    if (!this.has(element)) {
      collection.push(element);
      return true;
    }

    return false;
  };

  /* 
    This method return all elements of the colllection / set
  */

  this.values = () => collection;

  /*
   This method will remove/delete an element from the set,
   just like the add function we need to check if the element 
   exist and then we can otherwise we can just return false
   from the function
  */

  this.delete = element => {
    if (this.has(element)) {
      index = collection.indexOf(element);
      collection.splice(index, 1);
      return true;
    }
    return false;
  };

  /* 
   This function will return the size of the collection/set
  */
  this.size = () => collection.length;
}

const mySet = new Set();

mySet.add(1);
mySet.add(1);
console.log(
  "Should only contain one element: " + (mySet.size() === 1 ? true : false)
);
console.log(mySet.values());

mySet.add(5);
mySet.add(4);
console.log(
  "Should contain 3 elements: " + (mySet.size() === 3 ? true : false)
);
console.log(mySet.values());

mySet.delete(1);
console.log("Should not long contain 1: " + (!mySet.has(1) ? true : false));

console.log(mySet.values());

console.log(
  "Should contain 2 elements: " + (mySet.size() === 2 ? true : false)
);
console.log(mySet.values());
