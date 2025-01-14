## 풀이 방법

> 💡 **모든 트럭이 다 다리를 건널 때까지 while문 반복한다.**

반복될 때마다 실행되는 로직은 다음과 같다.

1. 다리 길이만큼 다리의 모든 칸을 `0`으로 초기화해준다

1. 대기하고 있는 맨 첫번째 트럭이 다리에 진입할 수 있는지 확인한다

- 다리 진입 가능한 경우
  = **현재 다리에 있는 총 weight + 현재 트럭의 weight 가 다리가 견딜 수 있는 무게보다 작아야 함**

3. 다리 맨 앞의 트럭 또는 `0`을 제거(popleft) 해준다

4. 대기 중인 첫번째 트럭이 다리에 진입할 수 있으면 다리에 해당 트럭을 append 해주고, 못 건너면 다리에 `0`을 append 해준다

<br />

## Tip

테스트 케이스 5번만 틀림. 왜? sum 함수 -> 시간 초과

- 기존 코드

```py
from collections import deque

def solution(bridge_length, weight, truck_weights):
    bridge = deque([0 for _ in range(bridge_length)])
    waiting_trucks = deque(truck_weights)

    time = 0
    while len(waiting_trucks) > 0 or sum(bridge) > 0:
        bridge.popleft()

        # 다음 트럭이 건널 수 있는지 확인
        # 현재 다리에 있는 총 weight + 현재 트럭의 weight 가 다리가 견딜 수 있는 무게보다 작아야 함
        if len(waiting_trucks) != 0 and sum(bridge) + waiting_trucks[0] <= weight:
            bridge.append(waiting_trucks[0])
            waiting_trucks.popleft()
        else:
            bridge.append(0)

        time += 1

    return time
```

<br />

- sum 함수 대신 `bridge.popleft()`, `bridge.append(..)` 해줄 때마다 bridge 상에 있는 트럭들의 총 무게를 계속 계산해주는 방식으로 푼 코드

```py
from collections import deque

def solution(bridge_length, weight, truck_weights):
    bridge = deque([0 for _ in range(bridge_length)])
    waiting_trucks = deque(truck_weights)

    time = 0
    weight_on_bridge = 0 # 다리 위에 있는 모든 트럭들의 무게 합
    while len(waiting_trucks) > 0 or weight_on_bridge > 0:
        number = bridge.popleft()
        weight_on_bridge -= number # 맨 앞의 트럭이 다리 건너면 무게 합에서 빼기

        if len(waiting_trucks) != 0 and weight_on_bridge + waiting_trucks[0] <= weight:
            bridge.append(waiting_trucks[0])
            weight_on_bridge += waiting_trucks[0] # 새로운 트럭이 다리에 진입하면 무게 합에 더해주기
            waiting_trucks.popleft()

        else:
            bridge.append(0)

        time += 1

    return time
```

sum 함수를 쓰면 왜 시간 초과가 발생하는지는 정확히 안 알아봤음...
