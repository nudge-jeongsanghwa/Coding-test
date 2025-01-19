function solution(scoville, K) {
  class MinHeap {
    constructor() {
      this.heap = [];
    }

    push(value) {
      this.heap.push(value);

      let currentIndex = this.size - 1;

      while (currentIndex > 0) {
        const parentIndex = Math.floor((currentIndex - 1) / 2);

        if (this.heap[parentIndex] <= value) break;

        this.heap[currentIndex] = this.heap[parentIndex];
        this.heap[parentIndex] = value;
        currentIndex = parentIndex;
      }
    }

    pop() {
      if (this.size === 0) return undefined;
      if (this.size === 1) return this.heap.pop();

      const popValue = this.heap[0];

      const target = this.heap.pop();

      let currentIndex = 0;

      while (currentIndex * 2 + 1 < this.size) {
        const leftIndex = currentIndex * 2 + 1;
        const rightIndex = currentIndex * 2 + 2;
        let smallerIndex = leftIndex;

        if (
          rightIndex < this.size &&
          this.heap[leftIndex] > this.heap[rightIndex]
        ) {
          smallerIndex = rightIndex;
        }

        if (this.heap[smallerIndex] >= target) break;

        this.heap[currentIndex] = this.heap[smallerIndex];
        currentIndex = smallerIndex;
      }

      this.heap[currentIndex] = target;

      return popValue;
    }

    get size() {
      return this.heap.length;
    }

    get head() {
      return this.heap[0];
    }
  }

  const heap = new MinHeap();

  let count = 0;

  scoville.forEach((s) => heap.push(s));

  while (heap.head < K) {
    if (heap.size < 2) return -1;

    const first = heap.pop();
    const second = heap.pop();
    const newS = first + second * 2;

    heap.push(newS);
    count++;
  }

  return count;
}
