## 풀이 방법

```js
function solution(scoville, K) {
  // <-- 최소 힙 구현
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
  // --> 최소 힙 구현

  //
  // 풀이 시작
  const heap = new MinHeap();

  // 혼합 횟수
  let count = 0;

  // 힙 초기화
  scoville.forEach((s) => heap.push(s));

  // 반복: 최소 스코빌 지수가 K 이상이 될 때까지
  while (heap.head < K) {
    // 남은 음식이 2개 미만이면 실패: -1 반환
    if (heap.size < 2) return -1;

    // 스코빌 지수 혼합
    const first = heap.pop();
    const second = heap.pop();
    const newS = first + second * 2;

    heap.push(newS);
    count++;
  }

  // 혼합 횟수 반환
  return count;
}
```

### 풀이 분석

scoville의 길이를 n이라고 할 때, scoville의 모든 원소에 대해 혼합을 하게 되면 반복문을 n번 순회하게 된다. 즉, 시간복잡도는 O(n)이다. n <= 1,000,000이므로 적절한 풀이이다.
