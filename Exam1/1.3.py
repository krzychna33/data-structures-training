
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

T = BST(Node(5))
T.insert(T.root, Node(3))
T.insert(T.root, Node(61))
T.insert(T.root, Node(12))
T.insert(T.root, Node(122))
T.insert(T.root, Node(1))

T.print_in_order(T.root)
print(T.count_nodes(T.root))