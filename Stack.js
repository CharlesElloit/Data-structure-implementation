/* Stack Implementation */
/* 
  Little  notes:
     Remember you can also implement stack using class instead of using a function.
*/
const Stack = function() {
  /* 
     # The count property is just to keep track of 
       how many item we have in the stack
     # The storage property is actual storage where 
       we store the item in
   */
  this.count = 0;
  this.storage = {};

  //The Add function which happens in a push and it adds the
  //the item at the end or in other words at the top of stack

  this.push = element => {
    this.storage[this.count] = element;
    this.count++;
  };

  //The Remove function which is also called pop it remove an item from
  // the top of the stack and dipsplay the removed item

  this.pop = () => {
    if (this.count === -1) {
      return undefined;
    }

    this.count--;
    let item = this.storage[this.count];
    delete this.storage[this.count];

    return item;
  };

  //This function returns the size of the stack
  this.size = () => this.count;

  //The peek function return the element at the end of the stack/ top of the stack
  //but not deleting it in other words it just display the value
  this.peek = element => {
    return this.storage[this.count - 1];
  };
};

const myStack = new Stack();

myStack.push(3);
myStack.push(5);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
console.log(myStack.size());
