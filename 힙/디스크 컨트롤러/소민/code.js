function solution(jobs) {
  jobs.sort((a, b) => a[0] - b[0]); // 작업 요청 시간 기준 정렬
  const waitHeap = new MinHeap(); // 대기 목록

  let time = 0;
  let completed = 0;
  let totalWaitTime = 0;
  let i = 0;

  while (completed < jobs.length) {
    // 요청 시각이 time보다 앞선 작업들을 대기 목록에 추가
    while (i < jobs.length && jobs[i][0] <= time) {
      waitHeap.insert(jobs[i]);
      i++;
    }

    // 대기 목록 작업
    if (waitHeap.size() > 0) {
      const [startTime, duration] = waitHeap.remove();
      time += duration; // 작업 소요 시간만큼 시간 증가
      totalWaitTime += time - startTime; // 반환 시간 계산
      completed++;
    } else {
      time++;
    }
  }

  return Math.floor(totalWaitTime / jobs.length);
}

class MinHeap {
  constructor() {
    this.values = [];
  }

  min() {
    return this.values[0];
  }

  size() {
    return this.values.length;
  }

  insert(val) {
    this.values.push(val);
    this.bubbleUp();
  }

  bubbleUp() {
    let childIdx = this.values.length - 1;
    let child = this.values[childIdx];
    while (childIdx > 0) {
      let parentIdx = Math.floor((childIdx - 1) / 2);
      let parent = this.values[parentIdx];
      if (parent[1] <= child[1]) break;
      this.values[parentIdx] = child;
      this.values[childIdx] = parent;
      childIdx = parentIdx;
    }
  }

  remove() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.bubbleDown();
    }
    return min;
  }

  bubbleDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;

      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild[1] < element[1]) swap = leftChildIdx;
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if ((swap === null && rightChild[1] < element[1]) || (swap !== null && rightChild[1] < leftChild[1])) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}
