## 풀이 방법

스택을 활용해 풀어보았다.

```js
const solution = (progresses, speeds) => {
  const answer = [];

  let cur = 1; // 맨 앞의 작업일수 저장
  let stack = 0; // 한 번에 배포할 작업 수 저장

  progresses
    // 완료까지 필요한 공수 계산
    .map((prog, idx) => Math.ceil((100 - prog) / speeds[idx]))
    .forEach((day) => {
      // 첫 원소일 경우 무조건 1이상이므로 스택에 추가
      // 이후 그 전의 원소보다 적거나 같은 시간만큼 걸리면 계속 추가
      if (day <= cur) {
        stack++;
      } else {
        // 그 전의 원소보다 더 오래 걸리므로 스택 초기화(배포)
        if (stack > 0) {
          answer.push(stack);
        }
        stack = 1;

        // 기준이 되는 작업일정 현재 일정으로 변경
        cur = day;
      }
    });

  answer.push(stack);

  return answer;
};
```

### 풀이 분석

작업 개수를 n이라고 할 때, 시간 복잡도는 O(n)이다.

최대 200번만 반복하면 되므로 꽤 빠르다.

## 다른 풀이

큐를 활용해 풀어보았다.

```js
const solution = (progresses, speeds) => {
  const answer = [];

  // 완료까지 필요한 공수 배열 => 큐
  const q = progresses.map((v, i) => Math.ceil((100 - v) / speeds[i]));

  // shift의 시간 복잡도가 O(n)이라 O(1)로 계산할 수 있는 인덱스 방식 사용
  let firstIndex = 0;
  let lastIndex = q.length - 1;

  // 큐에 원소가 남지 않을 때까지 반복
  while (firstIndex <= lastIndex) {
    let deployCount = 0;

    for (let i = 0, j = lastIndex - firstIndex + 1; i < j; i++) {
      // 날짜 1을 빼서 남은 날 계산
      const remain = q[firstIndex] - 1;

      // dequeue
      delete q[firstIndex];
      firstIndex += 1;

      // 앞에 있는 원소들이 빠졌는지 계산
      // 앞에 있는 원소들이 전부 빠져야 하므로 인덱스와 같은지 확인하면 됨
      const isDeploy = deployCount === i;

      if (remain < 0 && isDeploy) {
        // 배포 가능하면 배포 카운트++
        deployCount += 1;
      } else {
        // 아니면 다시 큐로
        // enqueue
        q[lastIndex + 1] = remain;
        lastIndex += 1;
      }
    }

    // 배포 가능한 작업이 있으면 정답 배열에 push
    if (deployCount > 0) answer.push(deployCount);
  }

  return answer;
};
```

### 풀이 분석

작업의 개수를 n, 남은 작업일수를 m이라고 했을 때, 각 작업 별 공수를 계산하는 과정이 O(n), while은 최대 남은 작업일수만큼 반복하고 그 안의 for는 최대 작업의 개수만큼 반복하므로 그 과정이 O(n\*m). 따라서 전체 시간 복잡도는 O(n\*m)이다.

맨 앞의 작업이 99일 남았고, 속도가 1이며, 작업의 개수가 100일 때 가장 오래 걸린다. 이 경우 99 + 99 x 100으로 9999번 계산해야 하므로 이 또한 느리진 않다.

### 풀이 비교

스택 풀이: 최소 0.07, 최대 0.19 ms
큐 풀이: 최소 0.17, 최대 2.13 ms
