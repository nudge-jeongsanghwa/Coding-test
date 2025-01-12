function solution(priorities, location) {
  // 우선순위와 초기 위치를 저장
  const arr = priorities.map((priority, index) => ({ index, priority }));
  // 실행 순서대로 저장
  const order = [];

  while (arr.length > 0) {
    const value = arr.shift();
    // 실행하려는 프로세스보다 우선순위가 높은 요소가 있는지 확인
    const hasBigger = arr.some((item) => item.priority > value.priority);

    if (hasBigger) {
      arr.push(value);
    } else {
      order.push(value);
    }
  }

  // location과 일치하는 index를 가진 요소의 실행 순서 반환
  return order.findIndex((item) => item.index === location) + 1;
}
