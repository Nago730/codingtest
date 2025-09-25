function solution(numbers) {
    const result = [];
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let k = i + 1; k < numbers.length; k++) {
            result.push(numbers[i] + numbers[k]);
        }
    }
    return [...new Set(result)].sort((a, b) => a - b);
}