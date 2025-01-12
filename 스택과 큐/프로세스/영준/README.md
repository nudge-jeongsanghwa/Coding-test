## 풀이 방법

```js
const solution = (priorities, location) => {
  // 우선순위 순서대로 정렬(실상 우선순위의 큐와 같음)
  const pOrder = priorities.slice().sort((a, b) => b - a);

  let count = 0; // 실행순서; 우선순위 큐의 인덱스 역할

  // <-- 프로세스가 대기할 큐
  const q = priorities.map((p, i) => [p, i]);
  let front = 0;
  let back = priorities.length;

  const size = () => back - front;
  const enqueue = (value) => {
    q.push(value);
    back += 1;
  };
  const dequeue = () => {
    const value = q[front];

    delete q[front];
    front += 1;

    return value;
  };
  // --> 프로세스가 대기할 큐

  // 프로세스 큐가 빌 때까지 반복
  while (size() > 0) {
    const value = dequeue();

    if (value[0] === pOrder[count]) {
      count++;

      // 초기 인덱스가 location과 같으면 중지
      if (value[1] === location) break;
      else continue;
    }

    enqueue(value);
  }

  return count; // 실행 순서 반환
};
```

### 풀이 분석

priorities의 길이를 n이라고 할 때, 프로세스 큐가 빌 때까지 while문으로 반복하는 부분의 경우 매번 마지막 순서에 실행될 수 있기 때문에 최악의 경우 n + (n - 1) + (n - 2) + ... 1번 실행된다. 등차수열의 합을 간단히 나타내면 n(n + 1)/2이므로 시간 복잡도는 O(n^2)이다. n <= 100이기 때문에 시간은 충분하다.
