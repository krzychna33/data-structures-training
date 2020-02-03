class Node:
    def __init__(self, key):
        self.key = key
        self.parent = None
        self.left = None
        self.right = None


class BST:

    def __init__(self, node):
        self.root = node

    def insert(self, node, newNode):
        if newNode.key >= node.key:
            if node.right is not None:
                self.insert(node.right, newNode)
            else:
                newNode.parent = node
                node.right = newNode
        else:
            if node.left is not None:
                self.insert(node.left, newNode)
            else:
                newNode.parent = node
                node.left = newNode

    def print_in_order(self, node):
        if node.left is not None:
            self.print_in_order(node.left)
        print(node.key)
        if node.right is not None:
            self.print_in_order(node.right)

    def count_nodes(self, node):
        if node is None:
            return 0
        return node.key + self.count_nodes(node.left) + self.count_nodes(node.right)

    def getMin(self, node):
        if node.left:
            return self.getMin(node.left)
        return node

    def getMax(self, node):
        if node.right:
            return self.getMax(node.right)
        return node

    def getPredecessor(self, node):
        if node.left:
            return self.getMax(node.left)
        while node.parent is not None and node.parent.left == node:
            node = node.parent
        return node.parent

    def getSuccesor(self, node):
        if node.left:
            return self.getMin(node.right)
        while node.parent is not None and node.parent.right == node:
            node = node.parent
        return node.parent

    def search(self, node, key):
        if node is None or node.key == key:
            return node
        if key >= node.key:
            return self.search(node.right, key)
        else:
            return self.search(node.left, key)

    def countThreeMin(self, root):
        min1 = self.getMin(root)
        min2 = self.getSuccesor(min1)
        min3 = self.getSuccesor(min2)

        return min1.key + min2.key + min3.key;


T = BST(Node(5))
T.insert(T.root, Node(3))
T.insert(T.root, Node(61))
T.insert(T.root, Node(12))
T.insert(T.root, Node(7))
T.insert(T.root, Node(9))
T.insert(T.root, Node(140))

T.print_in_order(T.root)
print("....")
print(T.getMin(T.root).key)
print("....")
print(T.search(T.root, 61).key)
print("....")
print(T.getPredecessor(T.search(T.root, 61)).key)
print("....")
print(T.countThreeMin(T.root))
