

class Node:
    def __init__(self, key):
            self.key = key
            self.prev = None
            self.next = None

class List:

    def __init__(self):
        self.head = None

    def insert(self, node):
        if self.head is None:
            node.prev = None
            node.next = None
            self.head = node
        else:
            node.next = self.head
            self.head.prev = node
            self.head = node

    def printList(self, node):
        print(node.key)
        if node.next:
            self.printList(node.next)

    def removeDuplicats(self):
        suspect = self.head
        while suspect.next is not None:
            node = suspect.next
            duplicated = False
            while node.next is not None:
                if node.key == suspect.key:
                    node.next.prev = node.prev
                    node.prev.next = node.next
                    duplicated = True
                node = node.next
            if node.key == suspect.key:
                node.prev.next = None
                duplicated = True
            if duplicated:
                if suspect == self.head:
                    suspect.next.prev = None
                    self.head = suspect.next
                else:
                    suspect.next.prev = suspect.prev
                    suspect.prev.next = suspect.next
            suspect = suspect.next


L = List()
L.insert(Node(42))
L.insert(Node(42))
L.insert(Node(42))
L.insert(Node(14))
L.insert(Node(42))
L.insert(Node(42))
L.insert(Node(42))
L.insert(Node(23))
L.insert(Node(42))
L.insert(Node(42))
L.insert(Node(42))


L.printList(L.head)
L.removeDuplicats()
print("***")
L.printList(L.head)

