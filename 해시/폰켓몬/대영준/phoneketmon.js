const solution = (nums) => {
    const hash = Array.from({length: 10000}, () => false);

    return nums.reduce((acc, cur) => {
        if(acc >= nums.length / 2) return acc;
        if(hash[cur - 1]) return acc;

        hash[cur - 1] = true;
        return acc + 1;
    }, 0);
}