function solution(numbers) {
  const arr = numbers.split("");

  const permutationSet = new Set();

  for (let i = 1; i <= arr.length; i++) {
    const results = getPermutations(arr, i);
    results.forEach((value) => {
      const num = Number(value.join(""));
      if (isPrime(num)) permutationSet.add(num);
    });
  }

  return permutationSet.size;
}

function getPermutations(arr, selectedNum) {
  const results = [];
  if (selectedNum === 1) return arr.map((item) => [item]);

  arr.forEach((fixed, idx, origin) => {
    const rest = [...origin.slice(0, idx), ...origin.slice(idx + 1)];
    const permutations = getPermutations(rest, selectedNum - 1);
    const attached = permutations.map((item) => [fixed, ...item]);
    results.push(...attached);
  });

  return results;
}

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
