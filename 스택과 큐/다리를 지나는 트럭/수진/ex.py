from collections import deque

def solution(bridge_length, weight, truck_weights):
    # bridge_length: 다리에 올라갈 수 있는 최대 트럭 수 (=다리 길이)
    # weight: 다리가 견딜 수 있는 무게
    
    bridge = deque([0 for _ in range(bridge_length)])
    waiting_trucks = deque(truck_weights)

    time = 0
    weight_on_bridge = 0
    while len(waiting_trucks) > 0 or weight_on_bridge > 0:
        number = bridge.popleft()
        weight_on_bridge -= number

        # 다음 트럭이 건널 수 있는지 확인
        # 현재 다리에 있는 총 weight + 현재 트럭의 weight 가 다리가 견딜 수 있는 무게보다 작아야 함
        if len(waiting_trucks) != 0 and weight_on_bridge + waiting_trucks[0] <= weight:
            bridge.append(waiting_trucks[0])
            weight_on_bridge += waiting_trucks[0]
            waiting_trucks.popleft()
        
        else:
            bridge.append(0)

        time += 1

    return time
