function solution(bridge_length, weight, truck_weights) {
  // 소요 시간
  let sec = 0;
  // 현재 다리를 지나는 트럭들의 무게의 합
  let totalWeight = 0;
  // 다리를 지나는 트럭
  const current = [];

  // 다리를 지나지 않은 트럭이 있거나 현재 다리를 지나는 중인 트럭이 있을 동안 실행
  while (truck_weights.length || current.length) {
    // 새 트럭이 다리에 올라갈 수 있을 경우
    if (totalWeight + truck_weights[0] <= weight && current.length < bridge_length) {
      const truck = truck_weights.shift();
      current.push([truck, sec + bridge_length]);
      totalWeight += truck;
      sec++;
    } else {
      // 새 트럭이 다리에 올라갈 수 없는 경우
      const [truck, finishTime] = current.shift();
      // 현재 시간이 종료 시간 이전일 경우에만 할당
      if (sec < finishTime) {
        sec = finishTime;
      }
      totalWeight -= truck;
    }
  }

  return sec + 1;
}
