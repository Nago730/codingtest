function solution(X, Y) {
    const answer = [];
    const map = new Map()
    for (let i = 9; i >= 0; i--) map.set(i, [0, 0]);
    for (const v of X) map.get(+v)[0]++;
    for (const v of Y) map.get(+v)[1]++;
    map.forEach((value, key) => {
        for (let i = 0; i < Math.min(...value); i++) answer.push(key);
    })
    if (!answer.length) return '-1';
    if (!+answer.join('')) return '0';
    return answer.join('')
}