const solution = (progresses, speeds) => {
  const answer = [];

  let cur = 1;
  let stack = 0;

  progresses
    .map((prog, idx) => Math.ceil((100 - prog) / speeds[idx]))
    .forEach((day) => {
      if (day <= cur) {
        stack++;
      } else {
        if (stack > 0) {
          answer.push(stack);
        }
        stack = 1;
        cur = day;
      }
    });

  answer.push(stack);

  return answer;
};
