## 풀이 방법

```js
const solution = (arr) => {
  const stack = [];

  // 배열 순회
  for (let i = 0, j = arr.length; i < j; i++) {
    // 스택 맨 윗층의 수와 같은 수라면 건너뛰기(연속된 수 제거)
    if (stack[stack.length - 1] === arr[i]) {
      continue;
    }

    // 연속되지 않는 경우만 스택에 저장
    stack.push(arr[i]);
  }

  return stack;
};
```

## 효율성

배열의 길이를 n이라고 둔다.

시간복잡도는 O(n)이다.

배열의 최대 길이는 1,000,000이기 때문에, 이론상 시간복잡도가 O(nlogn)인 풀이(n = 5,000,000)까지만 사용가능하다.

## 다른 풀이

```js
const solution = (arr) => {
  return arr.filter((v, i) => arr[i + 1] !== v);
};
```

js의 filter 메소드를 이용해 연속성을 판단 후 제거하는 풀이다. 코드는 매우 짧지만 속도는 for문과 스택을 사용한 풀이가 좀 더 빠르다.

### 효율성 비교

for 문을 사용한 풀이

```
테스트 1 〉 통과 (36.84ms, 83MB)
테스트 2 〉 통과 (38.02ms, 83.1MB)
테스트 3 〉 통과 (38.00ms, 83MB)
테스트 4 〉 통과 (36.69ms, 82.9MB)
```

filter 메소드를 사용한 풀이

```
테스트 1 〉 통과 (46.46ms, 81.8MB)
테스트 2 〉 통과 (24.65ms, 82.3MB)
테스트 3 〉 통과 (45.13ms, 83.3MB)
테스트 4 〉 통과 (45.02ms, 83MB)
```
