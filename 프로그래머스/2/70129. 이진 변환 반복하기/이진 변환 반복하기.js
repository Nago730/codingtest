function solution(s) {
    return convert(s, 0, 0);
}

function convert(s, round, count) {
    if (s == 1) return [round, count];
    const len = [...s].filter(Number).length;
    return convert(len.toString(2), round + 1, count + s.length - len);
}