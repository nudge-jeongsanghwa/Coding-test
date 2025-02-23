function solution(answers) {
  const supo = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  return supo
    .reduce((acc, cur, index) => {
      const cur_points = answers.reduce((points, ans, index) => {
        const supo_ans = cur[index % cur.length];
        return ans === supo_ans ? points + 1 : points;
      }, 0);

      acc.push([index + 1, cur_points]);
      return acc;
    }, [])
    .sort((a, b) => {
      if (a[1] === b[1]) return a[0] - b[0];

      return b[1] - a[1];
    })
    .filter((cur, idx, arr) => {
      if (cur === 0) return true;

      return arr[0][1] === cur[1];
    })
    .map((v) => v[0]);
}
