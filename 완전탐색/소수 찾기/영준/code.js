function solution(numbers) {
  const permutation = (arr, processing, result) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === -1) continue;
      if (arr[i] === "0" && processing.length === 0) continue;

      processing.push(arr[i]);
      arr[i] = -1;

      result.add(parseInt(processing.join("")));

      permutation(arr, processing, result);

      arr[i] = processing.pop();
    }

    return result;
  };

  const mergedNumbers = Array.from(permutation([...numbers], [], new Set()));

  const maxNumber = Math.max(...mergedNumbers);

  const isPrime = [false, false, ...new Array(maxNumber + 1).fill(true)];

  for (let i = 2; i <= maxNumber; i++) {
    if (!isPrime[i]) continue;

    for (let j = i + i; j <= maxNumber; j += i) {
      if (!isPrime[j]) continue;

      isPrime[j] = false;
    }
  }

  return mergedNumbers.reduce((acc, cur) => (isPrime[cur] ? acc + 1 : acc), 0);
}
