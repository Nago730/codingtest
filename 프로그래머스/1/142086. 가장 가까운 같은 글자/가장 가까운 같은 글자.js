function solution(s) {
    const obj = {};
    return s.split('').reduce((a, c, i) => {
        obj[c] !== undefined ? a.push(i - obj[c]) : a.push(-1);
        obj[c] = i;
        return a;
    }, []);
}