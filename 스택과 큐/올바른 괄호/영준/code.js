const solution = (s) => {
  let stack = 0;

  for (let i = 0, j = s.length; i < j; i++) {
    if (s[i] === '(') {
      stack += 1;
    } else {
      stack -= 1;
    }

    if (stack < 0) return false;
  }

  if (stack !== 0) return false;

  return true;
};
