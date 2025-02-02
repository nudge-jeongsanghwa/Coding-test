function solution(operations) {
  class Heap {
    constructor(heapType = "MAX") {
      this.heap = [];
      this.isMinHeap = heapType === "MIN";
    }

    get size() {
      return this.heap.length;
    }

    push(value) {
      this.heap.push(value);
      this.bubbleUp();
    }

    pop() {
      if (this.size === 0) return undefined;
      if (this.size === 1) return this.heap.pop();

      const popValue = this.heap[0];

      this.heap[0] = this.heap.pop();

      this.bubbleDown();

      return popValue;
    }

    bubbleUp() {
      let currentIndex = this.size - 1;

      while (currentIndex > 0) {
        const nextIndex = Math.floor((currentIndex - 1) / 2);

        if (this.compare(currentIndex, nextIndex)) {
          this.swap(currentIndex, nextIndex);
          currentIndex = nextIndex;
        } else break;
      }
    }

    bubbleDown() {
      let currentIndex = 0;

      while (currentIndex * 2 + 1 < this.size) {
        const leftIndex = currentIndex * 2 + 1;
        const rightIndex = currentIndex * 2 + 2;
        let priorIndex = leftIndex;

        if (rightIndex < this.size && this.compare(rightIndex, leftIndex)) {
          priorIndex = rightIndex;
        }

        if (this.compare(priorIndex, currentIndex)) {
          this.swap(currentIndex, priorIndex);
          currentIndex = priorIndex;
        } else break;
      }
    }

    compare(indexA, indexB) {
      if (this.isMinHeap)
        return this.heap[indexA].value < this.heap[indexB].value;
      return this.heap[indexA].value > this.heap[indexB].value;
    }

    swap(indexA, indexB) {
      const tmp = this.heap[indexA];

      this.heap[indexA] = this.heap[indexB];
      this.heap[indexB] = tmp;
    }
  }

  class DoublePriorityQueue {
    constructor() {
      this.minHeap = new Heap("MIN");
      this.maxHeap = new Heap();
      this.size = 0;
      this.deleted = new Map();
    }

    push(value, id) {
      const data = { value, id };

      this.minHeap.push(data);
      this.maxHeap.push(data);

      this.size += 1;
    }

    popMax() {
      while (this.size > 0) {
        const popped = this.maxHeap.pop();

        if (!popped) return 0;

        const { value, id } = popped;

        const isDeletedValue = this.deleted.get(id) !== undefined;

        if (!isDeletedValue) {
          this.deleted.set(id, true);
          this.size -= 1;

          return value;
        }
      }

      return 0;
    }

    popMin() {
      while (this.size > 0) {
        const popped = this.minHeap.pop();

        if (!popped) return 0;

        const { value, id } = popped;

        const isDeletedValue = this.deleted.get(id) !== undefined;

        if (!isDeletedValue) {
          this.deleted.set(id, true);
          this.size -= 1;

          return value;
        }
      }

      return 0;
    }
  }

  const dpq = new DoublePriorityQueue();

  operations.forEach((v, i) => {
    const [command, number] = v.split(" ");

    if (command === "I") {
      dpq.push(Number(number), i);
    } else if (number === "1") {
      dpq.popMax();
    } else {
      dpq.popMin();
    }
  });

  if (dpq.size === 1) {
    const value = dpq.popMax();
    return [value, value];
  }

  const max = dpq.popMax();
  const min = dpq.popMin();

  return [max, min];
}
