function solution(operations) {
  const heap = [];

  for (let i = 0; i < operations.length; i++) {
    const [command, data] = operations[i].split(" ");

    if (command === "I") {
      heap.push(Number(data));
    } else {
      let findValue = 0;

      if (data === "-1") {
        findValue = Math.min(...heap);
      } else {
        findValue = Math.max(...heap);
      }

      const idx = heap.indexOf(findValue);
      heap.splice(idx, 1);
    }
  }

  return heap.length ? [Math.max(...heap), Math.min(...heap)] : [0, 0];
}
