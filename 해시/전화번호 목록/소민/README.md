## 풀이 방법

전화 번호 목록을 sort로 정렬하고 앞의 문자열이 뒤 문자열의 접두어인지는 startsWith를 이용해 찾는다.

**입출력 예제 1번 정렬 예시**
["119", "97674223", "1195524421"]
-> [ '119', '1195524421', '97674223' ]

### 찾아본 해시 풀이

```js
function solution(phoneBook) {
  const table = {};

  for (const number of phoneBook) {
    table[number] = true;
  }

  for (const number of phoneBook) {
    for (let i = 1; i < number.length; i += 1) {
      const prefix = number.slice(0, i);
      if (table[prefix]) return false;
    }
  }

  return true;
}
```
