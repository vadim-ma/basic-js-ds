const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  left = null;
  right = null;
  constructor(value) {
    this.value = value;
  }
}
class BinarySearchTree {

  _root = null;

  root() {
    return this._root;
  }

  addAtRoot(node, root){
    if (node.data <= root.data) {
      if (root.left) {
        return this.addAtRoot(node, root.left);
      }
    }
  }

  add(data) {
    node = new Node(data);
    if (!this._root){
      this._root = node;
      return;
    }
    this.addAtRoot(node, this._root);
    }
  }

  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};