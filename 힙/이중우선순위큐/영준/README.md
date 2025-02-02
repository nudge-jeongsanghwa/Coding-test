## 풀이 방법

```js
function solution(operations) {
  // 1. 힙 정의
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

  // 2. 힙을 사용해 이중우선순위큐 정의
  class DoublePriorityQueue {
    constructor() {
      this.minHeap = new Heap("MIN");
      this.maxHeap = new Heap();
      this.size = 0;

      // 2-1. 최소 힙과 최대 힙에서 삭제된 값을 동기화하기 위해 맵과 id 사용
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

      // 2-2. 큐의 원소의 개수가 0이라면 문제의 조건에 따라 0 반환
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

      // 2-2. 큐의 원소의 개수가 0이라면 문제의 조건에 따라 0 반환
      return 0;
    }
  }

  // 3. 이중우선순위큐 선언 및 할당
  const dpq = new DoublePriorityQueue();

  // 4. 연산 배열을 순회하며 각 연산 실행
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

  // 5. 남은 원소가 한 개일 경우; 해당 값이 최대값이자 최소값이므로 반환
  if (dpq.size === 1) {
    const value = dpq.popMax();
    return [value, value];
  }

  const max = dpq.popMax();
  const min = dpq.popMin();

  // 6. 남은 원소가 한 개가 아닐 경우; 최대값과 최소값을 따로 판별해서 반환
  // 6-1. 남은 원소가 없을 경우; 큐에서 0 반환(2-2)
  return [max, min];
}
```

### 풀이 분석

직접 구현한 이중우선순위큐의 경우 큐의 원소의 개수를 n이라고 할 때, 삽입/삭제 연산의 시간복잡도가 O(logn)이다. 정확히는 logn번 이상 계산을 수행하는 경우도 있지만 logn의 배수에 그치기 때문에 시간복잡도는 크게 달라지지 않는다. 실제로 사용되는 이중우선순위큐가 어떻게 구현되고 시간복잡도가 어느 정도인지는 모르겠지만 충분히 목적한 풀이에 사용 가능한 수준의 객체를 구현한 것으로 보인다.

문제 풀이 전체의 시간복잡도를 구해보자. operations의 길이를 n이라고 한다면 위 풀이의 시간복잡도는 n <= 1,000,000이므로 O(n x logn) => O(nlogn)이라고 할 수 있다. 1억에 미치지 못하는 숫자이므로 사용 가능하다.

## 의문점

그냥 queue를 사용해도 모든 케이스를 통과한다. 이론적으로는 O(n^2 x logn)이라 1억을 넘는다. 근데 매번 큐를 정렬해도 문제를 충분히 풀 수 있다. 아무래도 제한시간이 매우 널널한 것 같다.
