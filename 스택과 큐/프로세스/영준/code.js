const solution = (priorities, location) => {
  const pOrder = priorities.slice().sort((a, b) => b - a);

  let count = 0;

  const q = priorities.map((p, i) => [p, i]);
  let front = 0;
  let back = priorities.length;

  const size = () => back - front;
  const enqueue = (value) => {
    q.push(value);
    back += 1;
  };
  const dequeue = () => {
    const value = q[front];

    delete q[front];
    front += 1;

    return value;
  };

  while (size() > 0) {
    const value = dequeue();

    if (value[0] === pOrder[count]) {
      count++;

      if (value[1] === location) break;
      else continue;
    }

    enqueue(value);
  }

  return count;
};
