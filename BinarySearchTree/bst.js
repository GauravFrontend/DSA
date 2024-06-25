class BSTNode {
    constructor(key) {
        this.key = key
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(key) {
        const newNode = new BSTNode(key)
        if (this.root === null) {
            this.root = newNode
        }
        else {
            this.insertNode(this.root, newNode)
        }
    }


    insertNode(node, newNode) {
        if (newNode.key < node.key) {
            if (node.left === null) {
                node.left = newNode
            }
            else {
                this.insertNode(node.left, newNode)
            }
        }
        else {
            if (node.right === null) {
                node.right = newNode
            }
            else {
                this.insertNode(node.right, newNode)
            }
        }
    }

    delete(key) {
        this.root = this.deleteNode(this.root, key)
    }

    deleteNode(node, key) {// node -> root
        if (node === null) {
            return null
        }
        if (key < node.key) {
            node.left = this.deleteNode(node.left, key)
        } else if (key > node.key) {
            node.right = this.deleteNode(node.right, key)
        } else {
            if (node.left === null && node.right === null) {
                return null
            } else if (node.left === null) {
                return node.right
            } else if (node.right === null) {
                return node.left
            }
            else {
                let tempNode = this.findMinNode(node.right)
                node.key = tempNode.key
                node.right = this.deleteNode(node.right, tempNode.key)
            }
        }
        return node;
    }

    findMinNode(node) {
        while (node.left !== null) {
            node = node.left
        }
        return node
    }
    // below is inOrder
    inOrderTraversal() {
        const result = []
        this.inOrder(this.root, result)
        return result
    }

    inOrder() {
        if (node !== null) {
            this.inOrder(node.left, result)
            result.push(node.key)
            this.inOrder(node.right, result)
        }
    }
    // below is PreOrder
    PreOrderTraversal() {
        const result = []
        this.PreOrder(this.root, result)
        return result
    }

    PreOrder() {
        if (node !== null) {
            result.push(node.key)
            this.PreOrder(node.left, result)
            this.PreOrder(node.right, result)
        }
    }

    // below is PostOder 

    PostOrderTraversal() {
        const result = []
        this.PostOrder(this.root, result)
        return result
    }

    PostOrder() {
        if (node !== null) {
            this.PostOrder(node.left, result)
            this.PostOrder(node.right, result)
            result.push(node.key)
        }
    }

    // recorssion kese sikhe , recursion tree bnana , or kuch printing k questions
    // last 2-3 video are pending because of recurrsion

}

