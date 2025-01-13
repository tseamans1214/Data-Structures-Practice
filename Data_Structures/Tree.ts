export class Tree {
    public root;
    public left;
    public right;
    private size;
    
    constructor (root) {
        this.root = root;
        this.left = null;
        this.right = null;
        this.size = 0;
    }

    public getRoot() {
        return this.root;
    }
    // Depth-First Searchs: preOrderSearch, postOrderSearch, inOrderSearch
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

    // Breadth-first search (BFS) in trees. Traverses Lowest Level (root) to Highest Level (furthest children)
    public levelOrderTraversal() {
        if (!this.root) return [];
      
        const result: number[] = [];
        const queue: Tree[] = [this];
      
        while (queue.length > 0) {
          const currentNode = queue.shift()!;
          result.push(currentNode.root);
      
          if (currentNode.left) {
            queue.push(currentNode.left);
          }
          if (currentNode.right) {
            queue.push(currentNode.right);
          }
        }
      
        console.log(result);
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
            this.size++;
            
        } else if (value > this.root) {
            if (this.right == null) {
                this.right = new Tree(value);
                console.log(`${value} added to Right Side of Tree`);
            } else {
                this.right.insert(value);
            }
            this.size++;
        } else {
            console.log(`Error: ${value} already exists in Tree`);
        }
    }

    public search(target) {
        let currentNode = this;
        while (currentNode != null) {
            if (currentNode.root == target) {
                return currentNode;
            } else if (target < currentNode.root && currentNode.left != null) {
                currentNode = currentNode.left;
            } else if (target > currentNode.root && currentNode.right != null) {
                currentNode = currentNode.right;
            } else {
                break;
            }
        }
        return null;
    }

    public getSize() {
        return this.size;
    }

    public getHeight() {
        if (!this.root) return -1;
        const leftHeight = this.left != null ? this.left.getHeight() : -1;
        const rightHeight = this.right != null ? this.right.getHeight() : -1;
        return Math.max(leftHeight, rightHeight) + 1;

    }

    public getMin() {
        if (this.left == null) return this.root;
        let currentNode = this.left;
        while (currentNode.left != null) currentNode = currentNode.left;
        
        return currentNode;
    }
    public getMax() {
        if (this.right == null) return this.root;
        let currentNode = this.right;
        while (currentNode.right != null) currentNode = currentNode.right;

        return currentNode.root;
    }

    public isEmpty() {
        if (this.root) {
            return false;
        }
        return true;
    }

    public delete(key: number): Tree | null {
        if (!this.root) return null;
    
        // Locate the node to delete
        if (key < this.root) {
            if (this.left) this.left = this.left.delete(key);
        } else if (key > this.root) {
            if (this.right) this.right = this.right.delete(key);
        } else {
            // Node found: handle the three cases
    
            // Case 1: Node is a leaf
            if (!this.left && !this.right) {
                return null;
            }
    
            // Case 2: Node has one child
            if (!this.left) return this.right;
            if (!this.right) return this.left;
    
            // Case 3: Node has two children
            // Find the inorder successor (smallest value in the right subtree)
            const minValue = this.right.getMin(); // Get minimum value in right subtree
            this.root = minValue; // Replace root value with the inorder successor's value
            this.right = this.right.delete(minValue); // Delete the successor
        }
    
        return this; // Return the modified tree
    }
    
    // Is Balanced: Check if the tree is balanced (the heights of the left and right subtrees of every
    //  node differ by at most one).

    // Find Successor/Predecessor: Find the next or previous node in the inorder traversal of the tree (common in Binary Search Trees).
    
    // Mirror/Invert: Create a mirror image of the tree.
    
    // Level Count: Count the number of nodes at each level (useful for Level Order Traversal).
    
    // Lowest Common Ancestor (LCA): Find the lowest common ancestor of two nodes in the tree.

}