/*
        QUEUE IMPLEMENTATION

  Little  notes:
     The Queue data sturcture is a way to hold data. 
     It is similar to a stack unlike stack which is 
     last-in and first-out, A queue is first-in first-out

     An example is when your buying something at the store
     the first person to get in the line is the first person 
     to get to the cash registor.
*/

function Queue() {
  let collection = [];

  /* 
     This is a helper function to display all the 
     item of the queue
   */
  this.print = () => console.log(collection);

  /*
   This function add element at the end of the 
   queue
  */
  this.enqueue = element => collection.push(element);

  /*
   This function remove element from the start of the
   queue
   */
  this.dequeue = () => collection.shift();

  /*
   This function remove element from the start of the
   queue
   */
  this.front = () => collection[0];

  /*
    This method return the size of the collection
  */
  this.size = collection.length;

  /*  
   This return boolen expression wheather the collection empty or not
  */
  this.isEmpty = () => collection.length === 0;
}

const queue = new Queue();

console.log(queue.isEmpty());
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.print();
queue.dequeue();
queue.enqueue(4);
console.log("The first item is: " + queue.front());
queue.print();
console.log(queue.isEmpty());
