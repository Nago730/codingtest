function solution(n) {
    if (n === 0) return 0;
    const factors = new Set();
    for (let pod = 1; pod <= Math.sqrt(n); pod++) {
        if (n % pod == 0) {
            factors.add(pod);
            factors.add(n / pod);
        }
    }
    return [...factors].reduce((a, c) => a + c, 0);
}