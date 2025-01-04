function solution(progresses, speeds) {
  const answer = [];

  const days = progresses.map((progress, idx) => Math.ceil((100 - progress) / speeds[idx]));

  let max = days[0];
  let count = 1;

  for (let i = 1; i < days.length; i++) {
    if (days[i] > max) {
      max = days[i];
      answer.push(count);
      count = 1;
    } else {
      count++;
    }
  }

  answer.push(count);
  return answer;
}
