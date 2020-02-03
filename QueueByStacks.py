
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


class Queue:
    def __init__(self):
        self.S1 = Stack()
        self.S2 = Stack()

    def enqueue(self, x):
        self.S1.push(x)

    def dequeue(self):
        while self.S1.size > 1:
            self.S2.push(self.S1.pop())
        elem = self.S1.pop()
        while self.S2.size > 0:
            self.S1.push(self.S2.pop())
        return elem


q = Queue()

q.enqueue(14)
q.enqueue(15)
q.enqueue(16)
print(q.dequeue())
print(q.dequeue())
print(q.dequeue())
q.enqueue(22)
q.enqueue(23)
print(q.dequeue())

print(q.dequeue())
