## 풀이 방법

```js
function solution(answers) {
  // 수포자들의 찍기 방식을 이중 배열로 저장
  const supo = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  return (
    supo
      // 각 수포자별로 [번호, 점수 배열] 만들기
      .reduce((acc, cur, index) => {
        // 이 수포자의 점수 계산
        const cur_points = answers.reduce((points, ans, index) => {
          // 찍기 배열을 돌면서 정답과 일치하면 1점을 더한다.
          const supo_ans = cur[index % cur.length];
          return ans === supo_ans ? points + 1 : points;
        }, 0);

        // 구한 점수를 가지고 번호와 함께 새로운 값을 반환
        acc.push([index + 1, cur_points]);
        return acc;
      }, [])
      // 점수에 따라 내림차순으로 정렬한다.
      // 점수가 같으면 번호 오름차순으로 정렬한다.
      .sort((a, b) => {
        if (a[1] === b[1]) return a[0] - b[0];

        return b[1] - a[1];
      })
      // 첫 번째 수포자의 점수, 즉 가장 높은 점수와 점수가 같지 않은 수포자는 모두 제거
      .filter((cur, idx, arr) => {
        if (cur === 0) return true;

        return arr[0][1] === cur[1];
      })
      // 점수는 제외하고 번호만 남긴다.
      .map((v) => v[0])
  );
}
```

### 풀이 분석

수포자의 명 수를 n, 시험 문제 수를 m이라고 할 때, 시간 복잡도는 O(n \* m + nlogn)이다. 수포자의 명 수 자체가 셋으로 적어서 큰 의미는 없긴 하다. 대략 최대 삼만 번 정도의 연산을 수행한다.
