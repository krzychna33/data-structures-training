class Node:
    def __init__(self, key):
        self.key = key
        self.parent = None
        self.left = None
        self.right = None


class BST:
    def __init__(self, node):
        self.root = node


    def insert(self, parent, node):
        if node.key > parent.key:
            if parent.right is None:
                node.parent = parent
                parent.right = node
            else:
                self.insert(parent.right, node)
        else:
            if parent.left is None:
                node.parent = parent
                parent.left = node
            else:
                self.insert(parent.left, node)

    def printInOrder(self, parent):
        if parent.left:
            self.printInOrder(parent.left)
        print(parent.key)
        if parent.right:
            self.printInOrder(parent.right)

    def count(self, parent):
        if parent is None:
            return 0
        else:
            if parent.left is None and parent.right is None:
                return 1 + self.count(parent.left) + self.count(parent.right)
            else:
                return self.count(parent.left) + self.count(parent.right)

bstInstance = BST(Node(14))

bstInstance.insert(bstInstance.root, Node(6))
bstInstance.insert(bstInstance.root, Node(25))
bstInstance.insert(bstInstance.root, Node(15))
bstInstance.insert(bstInstance.root, Node(144))
bstInstance.insert(bstInstance.root, Node(9))
bstInstance.insert(bstInstance.root, Node(7))

bstInstance.printInOrder(bstInstance.root)
print("===")
print(bstInstance.count(bstInstance.root))
