function solution(k, score) {
    const result = [];
    let stage = [];
    let min = score[0];
    score.forEach(v => {
        if (stage.length < k) {
            stage.push(v)
            if (v < min) {
                min = v;
            }
            result.push(min);
        } else {
            if (v > min) {
                stage = stage.sort((a, b) => b - a)
                stage.pop();
                stage.push(v);
                min = stage[k - 2];
                if (min > v) {
                    min = v;
                }
            }
            result.push(min)
        }
    })
    return result;
}