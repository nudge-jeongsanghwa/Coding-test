function solution(k, dungeons) {
  const cases = []; // 던전 탐험 가능한 모든 순서를 저장
  let answer = 0;

  permutation([], dungeons, cases);

  for (let i = 0; i < cases.length; i++) {
    let current = k; // 각 케이스마다 피로도 k 값으로 시작
    let count = 0; // 탐험한 던전 개수

    for (let j = 0; j < cases[i].length; j++) {
      const [min, use] = cases[i][j];

      if (current < min) break; // 현재 피로도가 최소 필요 피로도보다 작으면 연산 x

      current -= use;
      count++;
    }

    answer = Math.max(answer, count);
  }

  return answer;
}

const permutation = (permu, rests, result) => {
  if (rests.length == 0) {
    return result.push(permu);
  }

  rests.forEach((v, idx) => {
    const rest = [...rests.slice(0, idx), ...rests.slice(idx + 1)];
    permutation([...permu, v], rest, result);
  });
};
