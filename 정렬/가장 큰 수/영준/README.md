## 풀이 방법

```js
function solution(numbers) {
  return (
    numbers
      // 문자열로 만들어 비교
      .map((n) => n.toString())
      // 문자열을 더해서 더 큰 쪽을 앞으로
      .sort((a, b) => {
        if (a + b < b + a) return 1;

        return -1;
      })
      .join("")
      // 모두 0인 경우 0 하나만 남기기
      .replace(/^0+/, "0")
  );
}
```

### 풀이 분석

numbers의 길이를 n, numbers의 원소의 자릿수를 m이라고 할 때, 시간복잡도는 O(nmlogn)이다. 대충 계산해보면 16억인데, 왜인지 된다. 잘못 계산했나? m을 제외하고 계산하면 O(nlogn)이다.

## Tip

```js
function solution(numbers) {
  return (
    numbers
      .map((n) => n.toString())
      // 숫자로 만들어 비교
      .sort((a, b) => (b + a) * 1 - (a + b) * 1)
      .join("")
      .replace(/^0+/, "0")
  );
}
```

문자열 그대로 비교하지 않고 숫자로 변환해서 비교할 수도 있다. 1을 곱해주면 자바스크립트가 숫자로 인식한다.
