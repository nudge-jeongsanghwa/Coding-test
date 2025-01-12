const solution = (prices) => {
  const stack = [];
  const result = [];

  prices.forEach((p, index) => {
    if (index === 0) {
      stack.push({ value: p, time: index });
    } else if (stack[stack.length - 1]['value'] <= p) {
      stack.push({ value: p, time: index });
    } else {
      while (stack.length > 0 && stack[stack.length - 1]['value'] > p) {
        const popped = stack.pop();
        result[popped.time] = index - popped.time;
      }
      stack.push({ value: p, time: index });
    }
  });

  while (stack.length > 0) {
    const popped = stack.pop();
    result[popped.time] = prices.length - 1 - popped.time;
  }

  return result;
};
