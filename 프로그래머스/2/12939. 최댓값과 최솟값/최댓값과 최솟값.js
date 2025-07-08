function solution(s) {
    const numArr = s.split(' ');
    const numberize = (arr) => arr.map(Number);
    return [Math.min(...numberize(numArr)), Math.max(...numberize(numArr))].join(' ');
}