function solution(n, wires) {
  const wire = {};
  let answer = Infinity;

  // 연결된 전선 정보
  for (let [a, b] of wires) {
    (wire[a] ||= []).push(b);
    (wire[b] ||= []).push(a);
  }

  // 연결된 전선 개수 구하는 함수
  const getConnectedWireCount = (key, blocked) => {
    let count = 0;
    const stack = [key];
    const visited = new Set([blocked]); // 끊은 전선은 카운트하지 않기 위해 방문 처리

    while (stack.length) {
      const node = stack.pop();
      if (visited.has(node)) continue;

      visited.add(node);
      count++;

      for (const next of wire[node]) {
        if (!visited.has(next)) stack.push(next);
      }
    }

    return count;
  };

  for (let i = 1; i <= n; i++) {
    const pairs = wire[i];

    for (let j = 0; j < pairs.length; j++) {
      const section1 = getConnectedWireCount(i, pairs[j]);
      const section2 = n - section1;
      answer = Math.min(answer, Math.abs(section1 - section2));
    }
  }

  return answer;
}
