const solution = (arr) => {
  const stack = [];

  for (let i = 0, j = arr.length; i < j; i++) {
    if (stack[stack.length - 1] === arr[i]) {
      continue;
    }

    stack.push(arr[i]);
  }

  return stack;
};
