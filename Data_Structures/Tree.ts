export class Tree {
    public root;
    public left;
    public right;
    
    constructor (root) {
        this.root = root;
        this.left = null;
        this.right = null;
    }

    public getRoot() {
        return this.root;
    }

    // Root -> Left Node -> Right Node
    public preOrderSearch() {
        console.log(this.root);
        if (this.left) this.left.preOrderSearch();
        if (this.right) this.right.preOrderSearch();
    }

    // Left Node -> Right Node -> Root
    public postOrderSearch() {
        if (this.left) this.left.postOrderSearch();
        if (this.right) this.right.postOrderSearch();
        console.log(this.root);
    }

    // Left Node -> Root -> Right Node
    public inOrderSearch()  {
        if (this.left) this.left.inOrderSearch();
        console.log(this.root);
        if (this.right) this.right.inOrderSearch();
    }

    public insert(value) {
        if (this.root == null) {
            this.root = value;
        } else if (value < this.root) {
            if (this.left == null) {
                this.left = new Tree(value);
                console.log(`${value} added to Left Side of Tree`);
            } else {
                this.left.insert(value);
            }
        } else if (value > this.root) {
            if (this.right == null) {
                this.right = new Tree(value);
                console.log(`${value} added to Right Side of Tree`);
            } else {
                this.right.insert(value);
            }
        } else {
            console.log(`Error: ${value} already exists in Tree`);
        }
    }

}