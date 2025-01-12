const solution = (bridge_length, weight, truck_weights) => {
  class q {
    constructor() {
      this.q = [];
      this.frontIndex = 0;
      this.backIndex = 0;
    }

    push(value) {
      this.q.push(value);
      this.backIndex++;
    }

    pop() {
      const value = this.q[this.frontIndex];
      delete this.q[this.frontIndex];
      this.frontIndex++;

      return value;
    }

    get length() {
      return this.backIndex - this.frontIndex;
    }

    get front() {
      return this.q[this.frontIndex];
    }
  }

  let timer = 0;
  let scale = 0;

  const bridge = new q();
  const trucks = new q();

  truck_weights.forEach((truck) => trucks.push(truck));

  while (trucks.length > 0) {
    timer++;

    if (bridge.length && bridge.front.timer + bridge_length === timer) {
      const arrived = bridge.pop();
      scale -= arrived.weight;
    }

    if (trucks.front + scale <= weight) {
      const start = trucks.pop();
      bridge.push({ weight: start, timer: timer });
      scale += start;
    }
  }

  return timer + bridge_length;
};
