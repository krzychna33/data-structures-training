class Heap:
    def __init__(self, arr):
        self.H = arr
        self.size = len(arr)

    def heapify(self, index):
        left = index * 2 + 1
        right = index * 2 + 2
        maxIndex = index
        if left < self.size and self.H[maxIndex] < self.H[left]:
            maxIndex = left
        if right < self.size and self.H[maxIndex] < self.H[right]:
            maxIndex = right

        if index != maxIndex:
            buff = self.H[index]
            self.H[index] = self.H[maxIndex]
            self.H[maxIndex] = buff
            self.heapify(maxIndex)

    def increase(self, index, x):
        self.H[index] = self.H[index] + x
        while index > 0 and self.H[int((index - 1) / 2)] < self.H[index]:
            buff = self.H[int((index - 1) / 2)]
            self.H[int((index - 1) / 2)] = self.H[index]
            self.H[index] = buff
            index = int((index - 1) / 2)


heapInstance = Heap([55, 14, 28, 25, 9, 19, 20])
heapInstance.heapify(1)
print(heapInstance.H)
heapInstance.increase(3, 100)
print(heapInstance.H)
