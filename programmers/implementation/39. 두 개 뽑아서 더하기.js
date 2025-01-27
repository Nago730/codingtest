// 두 개 뽑아서 더하기
// 플랫폼: Programmers
// 레벨: 1
// 유형: 완전탐색
// URL: https://school.programmers.co.kr/learn/courses/30/lessons/68644

// 솔루션 코드
function solution(numbers) {
    const result = [];
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let k = i + 1; k < numbers.length; k++) {
            result.push(numbers[i] + numbers[k]);
        }
    }
    return [...new Set(result)].sort((a, b) => a - b);
}