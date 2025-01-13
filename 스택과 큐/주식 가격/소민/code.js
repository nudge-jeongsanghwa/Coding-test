function solution(prices) {
  const answer = Array.from({ length: prices.length }, () => 0);
  // 가격, 인덱스 저장
  const stack = [[prices[0], 0]];

  for (let i = 1; i < prices.length; i++) {
    const now = prices[i];
    // stack에 비교 대상이 없거나 이전 주식의 가격이 더 낮은 경우
    if (stack.length === 0 || now >= stack[stack.length - 1][0]) {
      stack.push([now, i]);
    } else {
      // 가격이 더 낮아 진 경우
      while (stack.length) {
        // stack의 마지막 요소부터 비교하며 더 높은 가격을 가진 경우에만 연산
        if (stack[stack.length - 1][0] <= now) break;
        const last = stack.pop();
        const [price, count] = last;
        // 가격이 떨어지기까지의 기간 계산
        answer[count] = i - count;
      }
      stack.push([now, i]);
    }
  }

  // 가격이 떨어지지 않은 stack에 남은 요소들의 기간 계산
  for (let i = 0; i < stack.length; i++) {
    const [number, count] = stack[i];
    answer[count] = prices.length - 1 - count;
  }

  return answer;
}
