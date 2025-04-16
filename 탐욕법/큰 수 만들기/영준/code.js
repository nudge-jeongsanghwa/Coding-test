function solution(number, k) {
  const stack = [];

  let count = k;

  for (let i = 0; i < number.length; i++) {
    const cur = number[i];

    while (count > 0 && stack.length > 0 && stack[stack.length - 1] < cur) {
      stack.pop();
      count--;
    }

    stack.push(cur);
  }

  return stack.slice(0, stack.length - count).join("");
}
