"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Tree_js_1 = require("./Data_Structures/Tree.js");
var binaryTree = new Tree_js_1.Tree(5);
//    5     Level: 0
// 2    7   Level: 1
//1 3  6 9  Level: 2
binaryTree.insert(2);
binaryTree.insert(7);
binaryTree.insert(9);
binaryTree.insert(6);
binaryTree.insert(3);
binaryTree.insert(1);
binaryTree.insert(1);
console.log("PreOrder Search: (Should be: 5, 2, 1, 3, 7, 6, 9)");
binaryTree.preOrderSearch();
console.log("InOrder Search: (Should be: 1, 2, 3, 5, 6, 7, 9)");
binaryTree.inOrderSearch();
console.log("PostOrder Search: (Should be: 1, 3, 2, 6, 9, 7, 5)");
binaryTree.postOrderSearch();
console.log("LevelOrder (Breadth-First) Search: (Should be: 5, 2, 7, 1, 3, 6, 9)");
binaryTree.levelOrderTraversal();
console.log("Number of Nodes: " + binaryTree.getSize());
console.log("Min: " + binaryTree.getMin());
console.log("Max: " + binaryTree.getMax());
console.log("Search(9): " + binaryTree.search(9));
console.log("Search(5): " + binaryTree.search(5));
console.log("Search(3): " + binaryTree.search(3));
console.log("Search(2): " + binaryTree.search(2));
console.log("Search(4): " + binaryTree.search(4));
console.log("Search(4): " + binaryTree.search(10));
console.log("Height: " + binaryTree.getHeight());
binaryTree.insert(10);
console.log("Height: " + binaryTree.getHeight());
console.log("isEmpty: " + binaryTree.isEmpty());
console.log("Delete: 7");
binaryTree.delete(7);
binaryTree.inOrderSearch();
