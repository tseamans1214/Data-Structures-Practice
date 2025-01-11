"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tree = void 0;
var Tree = /** @class */ (function () {
    function Tree(root) {
        this.root = root;
        this.left = null;
        this.right = null;
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
        }
        else if (value > this.root) {
            if (this.right == null) {
                this.right = new Tree(value);
                console.log("".concat(value, " added to Right Side of Tree"));
            }
            else {
                this.right.insert(value);
            }
        }
        else {
            console.log("Error: ".concat(value, " already exists in Tree"));
        }
        // if (this.root.getValue() == null) {
        //     this.root.setValue(value);
        // } else if (value < this.root.getValue()) {
        //     if (this.root.getLeft() == null) {
        //         this.root.setLeft(value);
        //     } else {
        //         this.root.getLeft().insert(value);
        //     }
        // } else if (value > this.root.getValue()) {
        //     this.root.getRight().insert(value);
        // } else {
        //     console.log("Error: Cannot insert duplicate");
        // }
    };
    return Tree;
}());
exports.Tree = Tree;
