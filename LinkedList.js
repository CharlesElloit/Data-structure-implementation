/* 
  LinkedList implementation in JavaScript 
*/

function LiskedList() {
  let length = 0;
  let head = null;

  //This function create a node
  let Node = function(element) {
    this.element = element;
    this.next = null;
  };

  this.head = () => head;

  //This function get the size of the LinkedList
  this.size = () => length;

  this.add = element => {
    let node = new Node(element);

    if (head === null) {
      head = node;
    } else {
      let currentNode = head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }

    length++;
  };

  this.remove = element => {
    let currentNode = head;
    let previousNode;

    if (currentNode.element === element) {
      head = currentNode.next;
    } else {
      while (currentNode.element !== element) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      previousNode.next = currentNode.next;
    }

    length--;
  };

  this.isEmpty = () => length === 0;

  this.indexOf = element => {
    let currentNode = head;
    let index = -1;

    //while the currentNode.next is not null
    while (currentNode) {
      index++;

      /* 
           if the currentNode.element is equal to element 
           we are finding the index then we return the index. 
         */
      if (currentNode.element === element) {
        return index;
      }

      /*
            if not then set the currentNode to the next node 
            and continous the while loop.
         */
      currentNode = currentNode.next;
    }

    /* 
         If the element is not found then return -1 which means 
         the list is empty.
      */
    return -1;
  };

  //this is self explaintory

  this.elementAtIndex = index => {
    let currentNode = head;
    let count = 0;

    while (count < index) {
      count++;
      currentNode = currentNode.next;
    }

    return currentNode.element;
  };

  //Add At a specific index
  this.addAtSpecificIndex = (index, element) => {
    let node = new Node(element);

    let currentNode = head;
    let previousNode;
    let currentIndex = 0;

    /*
       if the index passed in is greater than the length
       of the linkedList then return false.
     */
    if (index > length) {
      return false;
    }

    if (index === 0) {
      node.next = currentNode;
      head = node;
    } else {
      /*
          if the currentIndex of the element in the linkedList is 
          less than the index passed in then we gonna increment currentIndex
          then set the previousNode link to the currentNode link
          and currentNode link to the currentNode.next.
        */
      while (currentIndex < index) {
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      node.next = currentNode;
      previousNode.next = node;
    }

    length++;
  };

  this.removeAtSpecificIndex = index => {
    let currentNode = head;
    let previousNode;
    let currentIndex = 0;

    /* 
     Here we can not remove a negative index 
     and as well as greater index than the linkedList
     so we are checking against them to make sure 
     there is no negative index or greater index.
    */
    if (index < 0 || index >= length) {
      return null;
    }

    if (index === 0) {
      head = currentNode.next;
    } else {
      //going throught the elements in the linkedList
      while (currentIndex < index) {
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      previousNode.next = currentNode.next;
    }

    length--;

    //this is just to see the removed element
    return currentNode.element;
  };
}

//Example of a ListedList
let linkedList = new LiskedList();
linkedList.add("Charles");
linkedList.add("Laptop");
linkedList.add("Smith");
linkedList.add("Cat and Puppy");
linkedList.add("Chicken");

console.log(linkedList.size()); //should return 5
console.log(linkedList.removeAtSpecificIndex(3)); //should return Cat and Puppy
console.log(linkedList.elementAtIndex(3)); //should return Chicken
console.log(linkedList.indexOf("Smith")); // should return index 2
console.log(linkedList.size()); //should return 4
