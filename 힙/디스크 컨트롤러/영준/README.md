### 풀이 방법

```js
function solution(jobs) {
  // <-- 우선 순위 큐 구현
  class DiskController {
    constructor() {
      this.heap = [];
    }

    push(value) {
      this.heap.push(value);

      let currentIndex = this.size - 1;

      while (currentIndex > 0) {
        const parentIndex = Math.floor((currentIndex - 1) / 2);

        if (this.compare(currentIndex, parentIndex)) {
          this.heap[currentIndex] = this.heap[parentIndex];
          this.heap[parentIndex] = value;
          currentIndex = parentIndex;
        } else break;
      }
    }

    pop() {
      if (this.size === 0) return;
      if (this.size === 1) return this.heap.pop();

      const popValue = this.heap[0];

      const target = this.heap.pop();
      this.heap[0] = target;

      let currentIndex = 0;

      while (currentIndex * 2 + 1 < this.size) {
        const leftIndex = currentIndex * 2 + 1;
        const rightIndex = currentIndex * 2 + 2;
        let higherValueIndex = leftIndex;

        if (this.heap[rightIndex] && this.compare(rightIndex, leftIndex)) {
          higherValueIndex = rightIndex;
        }

        if (this.compare(higherValueIndex, currentIndex)) {
          this.heap[currentIndex] = this.heap[higherValueIndex];
          this.heap[higherValueIndex] = target;
          currentIndex = higherValueIndex;
        } else break;
      }

      return popValue;
    }

    get size() {
      return this.heap.length;
    }

    // boolean: current가 next보다 우선순위가 높은지 여부를 반환
    compare(currentIndex, nextIndex) {
      const current = this.heap[currentIndex];
      const next = this.heap[nextIndex];

      // 소요시간 비교
      if (current[2] !== next[2]) {
        return current[2] < next[2];
      }

      // 요청 시각 비교
      if (current[1] !== next[1]) {
        return current[1] < next[1];
      }

      // 번호 비교
      return current[0] < next[0];
    }
  }
  // --> 우선 순위 큐 구현

  //
  // 풀이 시작

  // 시간 째깍째깍
  let timer = 0;

  // 우선순위 큐
  const d = new DiskController();

  // 현재 실행 중인 작업
  let working = null;

  // 작업 목록 큐: 왠지 모르겠는데 정렬 필요함
  const j = jobs.map(([s, l], i) => [i, s, l]).sort((a, b) => a[1] - b[1]);

  // 작업 목록 큐 맨 앞 인덱스
  let index = 0;

  // 반환 시간 저장 배열
  const returnTime = [];

  // 반복: 작업 목록과 우선순위 큐가 모두 빌 때까지
  while (index < j.length || d.size > 0) {
    // 반복: 현재 시점 이전에 요청된 작업 모두 우선 순위 큐에 입력
    while (index < j.length && j[index][1] <= timer) {
      d.push(j[index]);
      index++;
    }

    // 진행 중인 작업이 끝났다면
    if (working !== null && working[1] === timer) {
      // 반환 시간 저장
      returnTime.push(working[1] - working[0]);
      working = null;
    }

    // 진행 중인 작업이 더 없는데 대기 중인 작업은 남았다면
    if (d.size > 0 && working === null) {
      // 진행 중인 작업 최신화
      const [i, s, l] = d.pop();
      working = [s, l + timer];

      // 진행 중인 작업이 끝나는 시점으로 시간 이동
      timer = working[1];
      continue;
    }

    // 진행 및 대기 중인 작업이 없다면 다음 요청 시점으로 시간 이동
    timer = j[index][1];
  }

  // 우선순위 큐가 비는 시점에 반복에 탈출하므로 진행 중인 작업이 하나 남는 것 처리
  returnTime.push(working[1] - working[0]);

  // 평균 계산 후 정수 부분만 반환
  return Math.floor(
    returnTime.reduce((acc, cur) => acc + cur) / returnTime.length,
  );
}
```

### 풀이 분석

jobs의 길이를 n이라고 한다면, 처음에 정렬하는 부분의 시간복잡도는 O(nlogn), 반복문을 도는 부분은 O(n \* logn)이다. 반복문 내부의 경우 시간이동을 통해 결과적으로 작업의 갯수만큼 실행되므로 선형 복잡도를 갖고, 힙 정렬은 logn의 복잡도를 갖는다. 따라서 시간복잡도는 O(nlogn)이다. n <= 500이므로 적절한 풀이이다.

## Tip

작업목록의 길이가 500이고 시간 이동을 활용하면 반복문 자체는 선형 복잡도만을 가지도록 할 수 있다. 그렇기 때문에 사실상 시간이 많이 남는 문제이다. 꼭 힙을 구현하지 않더라도 반복문 내부에서 계속 정렬을 해도 상관없다. 그럴 경우 시간복잡도가 O((n^2)logn)이 되는데, 이렇게 해도 약 2,000,000번 밖에 실행되지 않는다.
