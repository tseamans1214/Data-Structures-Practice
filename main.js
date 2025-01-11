"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Tree_js_1 = require("./Data_Structures/Tree.js");
var binaryTree = new Tree_js_1.Tree(5);
//    5
// 2    7
//1 3  6 9
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
