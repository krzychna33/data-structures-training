
class Node:
    def __init__(self, key):
        self.key = key
        self.next = None


class List:

    def __init__(self):
        self.head = None

    def insert(self, node):
        node.next = self.head
        self.head = node

    def print(self, node):
        print(node.key)
        if node.next is not None:
            self.print(node.next)

    def delete(self, i):
        if i == 1:
            self.head = self.head.next
            return
        counter = 1
        node = self.head
        while i-1 > counter and node.next.next is not None:
            node = node.next
            counter+=1

        node.next = node.next.next


L = List()
L.insert(Node(100))
L.insert(Node(200))
L.insert(Node(300))
L.insert(Node(400))
L.delete(3)

L.print(L.head)