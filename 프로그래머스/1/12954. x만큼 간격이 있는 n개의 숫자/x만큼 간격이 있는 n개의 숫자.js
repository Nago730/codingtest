function solution(x, n) {
    return Array.from({ length: n}).map((v, i) => (i + 1) * x);
}