const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  left = null;
  right = null;
  constructor(data) {
    this.data = data;
  }
}
class BinarySearchTree {

  _root = null;

  root() {
    return this._root;
  }

  add(data) {
    const node = new Node(data);
    if (!this._root){
      this._root = node;
      return;
    }
    let cur = this._root;
    while (cur) {
      if (data <= cur.data) {
        if (!cur.left){
          cur.left = node;
          return;
        }
        cur = cur.left;
      } else {
        if (!cur.right){
          cur.right = node;
          return;
        }
        cur = cur.right;
      }
    }
  }

  has(data) {
    const cur = this.find(data);
    return cur !== null;
  }

  find(data) {
    let cur = this._root;
    while (cur) {
      if (cur.data === data) {
        break;
      }
      cur = data < cur.data ? cur.left : cur.right;
    }
    return cur;
  }

  remove(data) {
    this._root = this.removeNode(this._root, data); 
  }

  removeNode(node, data) {
    if (node === null) {
      return null;
    } else if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    } else {
      if (node.left === null && node.right === null) {
          return null;
      }
      if (node.left === null) {
          return node.right;
      } else if(node.right === null) {
          return node.left;
      }
      let maxNode = this.maxNode(node.left);
      node.data = maxNode.data;
      node.left = this.removeNode(node.left, maxNode.data);
      return node;
    }
  }

  minNode(node) {
    if (!node) {
      return null;
    }
    let cur = node;
    while (cur.left) {
      cur = cur.left;
    }
    return cur;
  }

  maxNode(node) {
    if (!node) {
      return null;
    }
    let cur = node;
    while (cur.right) {
      cur = cur.right;
    }
    return cur;
  }

  min() {
    const minNode = this.minNode(this._root)
    return minNode ? minNode.data : null;
  }

  max() {
    const maxNode = this.maxNode(this._root)
    return maxNode ? maxNode.data : null;
  }
}

module.exports = {
  BinarySearchTree
};
