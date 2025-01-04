### 풀이 방법

작업 완료까지 걸리는 시간은 (100-진도)/속도이다.

- 0.1일이 걸리더라도 +1일이 되어야 하기 떄문에 Math.ceil을 사용

```js
// 각 작업이 완료되기까지 필요한 일수를 계산
const days = progresses.map((progress, idx) => Math.ceil((100 - progress) / speeds[idx]));
```

&nbsp;

앞 작업보다 적은 일수가 걸리는 뒤의 작업까지 하루에 배포가 가능하다는 점을 이용한다.

- 현재 작업 일수를 기준으로
  - 적게 걸리는 작업의 경우 배포 가능 개수 +1
  - 많이 걸리는 경우 다른 배포의 작업

&nbsp;

### 아쉬운 점과 개선 방법

**다른 사람 풀이**
count 변수를 별도로 두고 계산 후 push하지 않고 배포 시점을 배열 인덱스로 구분하여 배열 값을 직접 변경해 주는 방법

```js
for (let i = 0, j = 0; i < days.length; i++) {
  if (days[i] <= maxDay) {
    answer[j] += 1;
  } else {
    maxDay = days[i];
    answer[++j] = 1;
  }
}
```

&nbsp;

위의 방법으로 했다면 다음과 같은 이점이 있다.

- count 변수 제거 가능
- 마지막 배포 결과를 for문 종료시 추가로 `answer.push(count)`하는 연산 제거 가능
