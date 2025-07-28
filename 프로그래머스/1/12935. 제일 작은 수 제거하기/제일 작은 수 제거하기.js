function solution(arr) {
    let min = arr[0];
    let minIdx = 0;
    arr.forEach((v, i) => {
        if (v < min) {
            min = v;
            minIdx = i;
        }
    });
    arr.splice(minIdx, 1);
    return arr.length === 0 ? [-1] : arr;
}