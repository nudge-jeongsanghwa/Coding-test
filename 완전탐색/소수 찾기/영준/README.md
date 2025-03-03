## 풀이 방법

```js
function solution(numbers) {
  // 가능한 모든 숫자의 순열을 구해서 반환
  // arr: 사용할 숫자 배열
  // processing: 현재 줄 세운 순열 배열
  // result: 결과 배열(set)
  const permutation = (arr, processing, result) => {
    // arr를 순회하며 전부 넣어본다.
    for (let i = 0; i < arr.length; i++) {
      // 이미 사용한 숫자면 넘어간다.
      if (arr[i] === -1) continue;

      // 0으로 시작하는 경우는 넘어간다.
      if (arr[i] === "0" && processing.length === 0) continue;

      // 새로운 순열을 만든다.
      processing.push(arr[i]);

      // 사용한 숫자 표시를 해준다.
      arr[i] = -1;

      // 새로 만든 순열을 결과값에 반영한다.
      result.add(parseInt(processing.join("")));

      // 재귀함수를 사용해 새로 만든 순열 뒤로 더 붙여본다.
      permutation(arr, processing, result);

      // 사용한 숫자를 다시 돌려놓는다.
      arr[i] = processing.pop();
    }

    return result;
  };

  // 반환받은 set을 배열로 만들어준다.
  const mergedNumbers = Array.from(permutation([...numbers], [], new Set()));

  // 숫자들 중 최대값을 구한다.
  const maxNumber = Math.max(...mergedNumbers);

  // 에라토스테네스의 체를 사용해 소수 확인 배열을 완성한다.
  // 이 때 최대값은 위에서 구한 숫자들의 최대값을 이용한다.
  const isPrime = [false, false, ...new Array(maxNumber + 1).fill(true)];

  for (let i = 2; i <= maxNumber; i++) {
    if (!isPrime[i]) continue;

    for (let j = i + i; j <= maxNumber; j += i) {
      if (!isPrime[j]) continue;

      isPrime[j] = false;
    }
  }

  // 숫자들 중 소수인 것만 세서 더한 값을 반환한다.
  return mergedNumbers.reduce((acc, cur) => (isPrime[cur] ? acc + 1 : acc), 0);
}
```
