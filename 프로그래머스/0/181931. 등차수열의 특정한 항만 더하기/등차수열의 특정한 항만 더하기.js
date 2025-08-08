function solution(a, d, included) {
    return included.reduce((sum, isAdded, idx) => {
        if (isAdded) sum += a + d * (idx);
        return sum;
    },0);
}