"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tree = void 0;
var Tree = /** @class */ (function () {
    function Tree(root) {
        this.root = root;
        this.left = null;
        this.right = null;
        this.size = 0;
    }
    Tree.prototype.getRoot = function () {
        return this.root;
    };
    // Root -> Left Node -> Right Node
    Tree.prototype.preOrderSearch = function () {
        console.log(this.root);
        if (this.left)
            this.left.preOrderSearch();
        if (this.right)
            this.right.preOrderSearch();
    };
    // Left Node -> Right Node -> Root
    Tree.prototype.postOrderSearch = function () {
        if (this.left)
            this.left.postOrderSearch();
        if (this.right)
            this.right.postOrderSearch();
        console.log(this.root);
    };
    // Left Node -> Root -> Right Node
    Tree.prototype.inOrderSearch = function () {
        if (this.left)
            this.left.inOrderSearch();
        console.log(this.root);
        if (this.right)
            this.right.inOrderSearch();
    };
    // Breadth-first search (BFS) in trees. Traverses Lowest Level (root) to Highest Level (furthest children)
    Tree.prototype.levelOrderTraversal = function () {
        if (!this.root)
            return [];
        var result = [];
        var queue = [this];
        while (queue.length > 0) {
            var currentNode = queue.shift();
            result.push(currentNode.root);
            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }
        console.log(result);
    };
    Tree.prototype.insert = function (value) {
        if (this.root == null) {
            this.root = value;
        }
        else if (value < this.root) {
            if (this.left == null) {
                this.left = new Tree(value);
                console.log("".concat(value, " added to Left Side of Tree"));
            }
            else {
                this.left.insert(value);
            }
            this.size++;
        }
        else if (value > this.root) {
            if (this.right == null) {
                this.right = new Tree(value);
                console.log("".concat(value, " added to Right Side of Tree"));
            }
            else {
                this.right.insert(value);
            }
            this.size++;
        }
        else {
            console.log("Error: ".concat(value, " already exists in Tree"));
        }
    };
    Tree.prototype.search = function (target) {
        var currentNode = this;
        while (currentNode != null) {
            if (currentNode.root == target) {
                return currentNode;
            }
            else if (target < currentNode.root && currentNode.left != null) {
                currentNode = currentNode.left;
            }
            else if (target > currentNode.root && currentNode.right != null) {
                currentNode = currentNode.right;
            }
            else {
                break;
            }
        }
        return null;
    };
    Tree.prototype.getSize = function () {
        return this.size;
    };
    Tree.prototype.getHeight = function () {
        if (!this.root)
            return -1;
        var leftHeight = this.left != null ? this.left.getHeight() : -1;
        var rightHeight = this.right != null ? this.right.getHeight() : -1;
        return Math.max(leftHeight, rightHeight) + 1;
    };
    Tree.prototype.getMin = function () {
        if (this.left == null)
            return this.root;
        var currentNode = this.left;
        while (currentNode.left != null)
            currentNode = currentNode.left;
        return currentNode;
    };
    Tree.prototype.getMax = function () {
        if (this.right == null)
            return this.root;
        var currentNode = this.right;
        while (currentNode.right != null)
            currentNode = currentNode.right;
        return currentNode.root;
    };
    Tree.prototype.isEmpty = function () {
        if (this.root) {
            return false;
        }
        return true;
    };
    Tree.prototype.delete = function (key) {
        if (!this.root)
            return null;
        // Locate the node to delete
        if (key < this.root) {
            if (this.left)
                this.left = this.left.delete(key);
        }
        else if (key > this.root) {
            if (this.right)
                this.right = this.right.delete(key);
        }
        else {
            // Node found: handle the three cases
            // Case 1: Node is a leaf
            if (!this.left && !this.right) {
                return null;
            }
            // Case 2: Node has one child
            if (!this.left)
                return this.right;
            if (!this.right)
                return this.left;
            // Case 3: Node has two children
            // Find the inorder successor (smallest value in the right subtree)
            var minValue = this.right.getMin(); // Get minimum value in right subtree
            this.root = minValue; // Replace root value with the inorder successor's value
            this.right = this.right.delete(minValue); // Delete the successor
        }
        return this; // Return the modified tree
    };
    return Tree;
}());
exports.Tree = Tree;
