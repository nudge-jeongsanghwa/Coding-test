function solution(jobs) {
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

  let timer = 0;
  let index = 0;

  const d = new DiskController();
  let working = null;

  const j = jobs.map(([s, l], i) => [i, s, l]).sort((a, b) => a[1] - b[1]);

  const returnTime = [];

  while (index < j.length || d.size > 0) {
    while (index < j.length && j[index][1] <= timer) {
      d.push(j[index]);
      index++;
    }

    if (working !== null && working[1] === timer) {
      returnTime.push(working[1] - working[0]);
      working = null;
    }

    if (d.size > 0 && working === null) {
      const [i, s, l] = d.pop();
      working = [s, l + timer];

      timer = working[1];
      continue;
    }

    timer = j[index][1];
  }

  returnTime.push(working[1] - working[0]);

  return Math.floor(
    returnTime.reduce((acc, cur) => acc + cur) / returnTime.length,
  );
}
