## 풀이 방법

```js
const solution = (prices) => {
  const stack = [];
  const result = [];

  // 초 단위 가격을 순서대로 순회
  prices.forEach((p, index) => {
    // 첫 번째의 경우 그냥 스택에 입력
    if (index === 0) {
      // 스택에 입력 시 index도 같이 입력
      stack.push({ value: p, time: index });

      // 스택 맨 위의 가격보다 현재 가격이 높다면(가격이 유지되었거나 올랐다면) 그대로 입력
      // 즉, 스택은 오름차순으로 쌓이게 됨
    } else if (stack[stack.length - 1]['value'] <= p) {
      stack.push({ value: p, time: index });

      // 가격이 떨어졌다면 계산할 기간이 되었으므로 빼내고 index에 따라 result에 기록
    } else {
      // 가격이 떨어진 모든 시간에 대해 기록해야 하므로 같거나 낮은 가격이 나올 때까지 반복
      // 스택은 오름차순으로 쌓여있으므로 반복 이후 현재 가격보다 높은 가격이 남아있을 수 없음
      // 현재 시간인 index를 기준으로 계산
      while (stack.length > 0 && stack[stack.length - 1]['value'] > p) {
        const popped = stack.pop();
        result[popped.time] = index - popped.time;
      }
      stack.push({ value: p, time: index });
    }
  });

  // 마지막에 스택에 남아있는 시간들에 대해 끝난 시간인 prices.length - 1을 기준으로 계산하여 기록
  while (stack.length > 0) {
    const popped = stack.pop();
    result[popped.time] = prices.length - 1 - popped.time;
  }

  return result;
};
```
