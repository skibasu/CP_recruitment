const setTwoRandomIds = (minMax: number[]) => {
    const arr: number[] = [];
    while (arr.length < 2) {
        const val = Math.floor(
            Math.random() * (minMax[1] - minMax[0] + 1) + minMax[0]
        );
        !arr.includes(val) && arr.push(val);
    }
    return arr;
};

export default setTwoRandomIds;
