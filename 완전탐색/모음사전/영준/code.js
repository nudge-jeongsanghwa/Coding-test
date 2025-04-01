function solution(word) {
  const letters = ["A", "E", "I", "O", "U"];

  let count = 0;
  const stack = [];

  const backTracking = (depth) => {
    if (depth !== 0) count++;
    if (stack.join("") === word) return true;
    if (depth === 5) return false;

    for (let i = 0; i < letters.length; i++) {
      stack.push(letters[i]);

      if (backTracking(depth + 1)) return true;

      stack.pop();
    }

    return false;
  };

  backTracking(0, [], []);

  return count;
}
