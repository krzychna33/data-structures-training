
class Queue:
    def __init__(self):
        self.Q = [None] * 10
        self.tail = 0
        self.head = 0

    def enqueue(self, x):
        self.Q[self.tail] = x
        self.tail+=1

    def dequeue(self):
        if self.tail != self.head:
            elem = self.Q[self.head]
            self.head+=1
            return elem

    def isEmpty(self):
        if self.tail == self.head:
            return True
        else:
            return False


class Stack:

    def __init__(self):
        self.S = [None] * 10
        self.size = 0

    def push(self, elem):
        self.S[self.size] = elem
        self.size+=1

    def pop(self):
        if self.size > 0:
            elem = self.S[self.size-1]
            self.size-=1
            return elem


K = Queue()
K.enqueue(14)
K.dequeue()
K.enqueue(-2)
K.enqueue(100)
K.enqueue(-182)
K.enqueue(12)
K.enqueue(772)
S1 = Stack()
S2 = Stack()


def move():
    while not K.isEmpty():
        elem = K.dequeue()
        if elem >= 0:
            S1.push(elem)
        else:
            S2.push(elem)

move()
print(S1.S)
print(S2.S)