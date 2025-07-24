function solution(brown, yellow) {
    const total = brown / 2 - 2;
    for (let i = 1; i < total; i++) {
        if (i * (total - i) === yellow) return [total - i + 2, i + 2];
    }
}