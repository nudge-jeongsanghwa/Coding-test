const solution = (phone_book) => {
  const prefixSet = new Set();
  const numSet = new Set();

  return phone_book.every((num) => {
    if (numSet.has(num)) {
      return false;
    }

    for (let i = 0, j = num.length, prefix = ''; i < j; i++) {
      prefix += num[i];

      if (prefixSet.has(prefix)) {
        return false;
      }

      numSet.add(prefix);
    }

    prefixSet.add(num);

    return true;
  });
};
