/* Tree data structure implementation in JavaScript */

/* Here we are going to use classes to construct the Binary Search Tree */

//This is the creation of single Node which initial start as root Node
class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

//This is the initial BST class
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  addNewNode(data) {
    const node = this.root;

    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
      /* 
        This is a recurse function which searches the tree
        to located where to place the new node, we are trying
        add to the tree.
      */
      const searchTree = function(node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  } //End of addNewNode

  //This function finds the Min of the Binary Search Tree
  //on the Left side
  findTheMin() {
    let current = this.root;

    while (current.left !== null) {
      current = current.left;
    }

    return current.data;
  }

  //This function finds the Max of the Binary Search Tree
  //on the right side
  findTheMax() {
    let current = this.root;

    while (current.right !== null) {
      current = current.right;
    }

    return current.data;
  }

  //Find function which find the specific node in Binary Tree
  find(data) {
    let current = this.root;

    while (current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }

      if (current === null) {
        return "The node is not found.";
      }
    }
  }

  //this function check if the specific node is present in
  //Binary search Tree.
  has(data) {
    let current = this.root;

    //this say while current node is not null the
    // do the following.
    while (current) {
      if (data === current.data) {
        return true;
      }
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return false;
  }

  //This function checks if the tree is balanced or not
  //Remember for a tree to be balanced there most a different of 0 or 1
  isBalanced() {
    return this.findTheMinHieght() >= this.findTheMaxHeight() - 1;
  }

  //This is also a recursive which takes a node but
  //if you don't pass in a node it defaults it to the root node

  findTheMinHieght(node = this.root) {
    if (node === null) {
      return -1;
    }

    let left = this.findTheMinHieght(node.left);
    let right = this.findTheMinHieght(node.right);

    if (left < right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }

  //This is also a recursive which takes a node but
  //if you don't pass in a node it defaults it to the root node
  findTheMaxHeight(node = this.root) {
    if (node === null) {
      return -1;
    }

    let left = this.findTheMaxHeight(node.left);
    let right = this.findTheMaxHeight(node.right);

    if (left > right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }

  delete(data) {
    //This is a recursive function
    const removeNode = function(node, data) {
      //First check if the tree is empty
      if (node === null) {
        return null;
      }

      //Here there are three situation
      /*
         #first we need to check if the node has no children
         if so then we are gonna set the reference to the node 
         to null and get rid of the node.

         #if node has no left child

         #if node has no right child

         #if node has two children
       
      */

      if (data === node.data) {
        //this basically means the node has no children
        if (node.left === null && node.right === null) {
          return null;
        }

        //if node has node left child
        if (node.left === null) {
          return node.right;
        }

        //if node has no right child
        if (node.right === null) {
          return node.left;
        }

        //if node has two children
        let temporaryNode = node.right;

        while (temporaryNode.left !== null) {
          temporaryNode = temporaryNode.left;
        }

        node.data = temporaryNode.data;
        node.right = removeNode(node.right, temporaryNode.data);
        return node;

        //if  node.data is less than the data
        //then we gonna search on the left side
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        //That means data is more than node.data
        node.right = removeNode(node.right, data);
        return node;
      }
    };

    this.root = removeNode(this.root, data);
  }
} //End of the Binary-Search-Tree class

//Example of Binary Search Tree
const bst = new BinarySearchTree();

/* Testing all functions */

// // bst.addNewNode(4);
// bst.addNewNode(7);
// bst.addNewNode(19);
// bst.addNewNode(1);
// bst.addNewNode(25);
// bst.addNewNode(5);
// bst.addNewNode(12);
// bst.delete(4);
// console.log(bst.find(4)); //should return the node is not found cuz it's been deleted.
// console.log(bst.findTheMin()); //should return 1
// console.log(bst.findTheMax()); //should return 25
// console.log(bst.has(4)); // should return false

/* 
   This is finding the height of tree and
   if the tree is balanced 
 */
bst.addNewNode(9);
bst.addNewNode(4);
bst.addNewNode(17);
bst.addNewNode(3);
bst.addNewNode(6);
bst.addNewNode(22);
bst.addNewNode(5);
bst.addNewNode(7);
bst.addNewNode(2);

console.log("max-height: " + bst.findTheMaxHeight());
console.log("mim-height: " + bst.findTheMinHieght());
console.log(bst.isBalanced());
bst.addNewNode(10);

console.log("max-height: " + bst.findTheMaxHeight());
console.log("mim-height: " + bst.findTheMinHieght());
console.log(bst.isBalanced());
