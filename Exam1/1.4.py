class MinHeap:
    def __init__(self, array):
        self.H = array
        self.size = len(array)

    def heapify(self, index):
        left = 2 * index + 1
        right = 2 * index + 2
        min_index = index
        if left < self.size and self.H[left] < self.H[min_index]:
            min_index = left
        if right < self.size and self.H[right] < self.H[min_index]:
            min_index = right

        if min_index != index:
            buff = self.H[min_index]
            self.H[min_index] = self.H[index]
            self.H[index] = buff
            self.heapify(min_index)

    def increase(self, x):
        self.H[0] = self.H[0] + x
        self.heapify(0)


K = MinHeap([2, 14, 4, 71, 11, 6])
K.heapify(1)
print(K.H)
K.increase(5)
print(K.H)
