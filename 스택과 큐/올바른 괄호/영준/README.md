## 풀이 방법

```js
const solution = (s) => {
  let stack = 0;

  for (let i = 0, j = s.length; i < j; i++) {
    // 여는 괄호면 스택에 더하고 닫는 괄호면 뺀다.
    if (s[i] === '(') {
      stack += 1;
    } else {
      stack -= 1;
    }

    // 너무 닫아서 스택이 음수가 되면 false 반환
    if (stack < 0) return false;
  }

  // 열린 게 남아서 스택이 양수가(0이 아니게) 되면 false 반환
  if (stack !== 0) return false;

  return true;
};
```

### 풀이 분석

s의 길이를 n이라고 했을 때, 시간 복잡도는 O(n)이다. 100,000번의 계산이 필요하므로 충분하다.
