## 풀이 방법

```js
function solution(array, commands) {
  // 1. commands 배열 순회하며 각 조건의 답을 가진 새로운 배열 반환
  return commands.map(([i, j, k]) => {
    // 2. i, j에 값에 맞는 새로운 배열 생성
    // 3. 새로운 배열을 오름차순으로 정렬
    // 4. k에 맞는 순서를 가진 원소 반환
    return array.slice(i - 1, j).sort((a, b) => a - b)[k - 1];
  });
}
```

### 풀이 분석

array의 길이를 n, commands의 길이를 m이라고 할 때, commands를 순회하며 매번 array를 정렬하므로 시간복잡도는 O(mlogn)이다. n <= 100, m <= 50 이므로 사용 가능하다.
