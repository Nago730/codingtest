function solution(k, m, score) {
    let result = 0;
    score.sort((a,b) => a - b);
    while(score.length >= m) {
        const box = [];
        for (let i = 0; i < m; i++) {
            box.push(score.pop());
        }
        result += Math.min(...box) * m;
    }
    return result;
}