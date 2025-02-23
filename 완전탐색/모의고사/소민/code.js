function solution(answers) {
  const std1 = [1, 2, 3, 4, 5];
  const std2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const std3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const score = [0, 0, 0];

  answers.map((item, index) => {
    if (item === std1[index % std1.length]) score[0]++;
    if (item === std2[index % std2.length]) score[1]++;
    if (item === std3[index % std3.length]) score[2]++;
  });

  const maxScore = Math.max(...score);

  const answer = [];
  for (let i = 0; i < score.length; i++) {
    if (score[i] === maxScore) answer.push(i + 1);
  }

  return answer;
}
