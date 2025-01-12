## 풀이 방법

```js
const solution = (bridge_length, weight, truck_weights) => {
  // 큐 클래스로 정의(사용할 부분만)
  class q {
    constructor() {
      this.q = [];
      this.frontIndex = 0;
      this.backIndex = 0;
    }

    push(value) {
      this.q.push(value);
      this.backIndex++;
    }

    pop() {
      const value = this.q[this.frontIndex];
      delete this.q[this.frontIndex];
      this.frontIndex++;

      return value;
    }

    get length() {
      return this.backIndex - this.frontIndex;
    }

    get front() {
      return this.q[this.frontIndex];
    }
  }

  let timer = 0; // 시간 째깍째깍
  let scale = 0; // 다리에 올라온 트럭 무게 현황

  const bridge = new q(); // 다리를 지나는 트럭 큐
  const trucks = new q(); // 대기 중인 트럭 큐

  // 대기 중인 트럭 큐 초기화
  truck_weights.forEach((truck) => trucks.push(truck));

  // 대기 중인 트럭이 없을 때까지 반복
  while (trucks.length > 0) {
    timer++; // 시간이 갑니다

    // 다리에 트럭이 있고, 맨 앞의 트럭이 다 왔으면 내림
    // 다 왔다는 건 처음 올랐을 때의 시간에 다리 길이를 더해서 현재 시간과 비교해 알아냄
    if (bridge.length && bridge.front.timer + bridge_length === timer) {
      const arrived = bridge.pop();
      scale -= arrived.weight;
    }

    // 대기 중인 첫 순서의 트럭이 다리에 올랐을 때 무게 한도가 초과되지 않으면 다리 입성
    if (trucks.front + scale <= weight) {
      const start = trucks.pop();
      bridge.push({ weight: start, timer: timer }); // 다리에 오른 시간도 객체 형태로 같이 넣어줌
      scale += start;
    }
  }

  // 다리에 올라간 마지막 트럭이 내리는 시간을 반환
  return timer + bridge_length;
};
```

### 풀이 분석

truck_weights의 길이를 n이라고 할 때, 그만큼 반복하므로 시간 복잡도는 O(n)이다. n <= 10,000이므로 시간은 충분하다.

## Tip

다리가 길고 무게 한도는 낮아서 올라가지 못하는 반복이 계속될 경우 다음으로 트럭이 다리를 내리는 때까지 시간을 점프해주는 과정을 추가해준다면 성능이 올라간다.(프로그래머스 다른 사람 풀이 참고)

```js
while (trucks.length > 0) {
  timer++;

  if (bridge.length && bridge.front.timer + bridge_length === timer) {
    const arrived = bridge.pop();
    scale -= arrived.weight;
  }

  if (trucks.front + scale <= weight) {
    const start = trucks.pop();
    bridge.push({ weight: start, timer: timer });
    scale += start;
    continue; // 다리에 올라갈 수 있었으면 다음으로
  }

  // 다리에 올라갈 수 없었으면 시간 점프
  timer = bridge.front.timer + bridge_length - 1;
}
```
