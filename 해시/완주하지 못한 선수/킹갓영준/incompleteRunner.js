const solution = (participant, completion) => {
    const pMap = participant.reduce((acc, cur) => {
        if(!acc[cur]) {
            acc[cur] = 1;
        } else {
            acc[cur]++;
        }

        return acc;
    }, {})

    completion.forEach((c) => pMap[c]--);

    return Object.keys(pMap).find((p) => pMap[p] > 0);
}