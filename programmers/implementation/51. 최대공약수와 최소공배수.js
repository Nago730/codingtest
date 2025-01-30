// 최대공약수와 최소공배수
// 플랫폼: Programmers
// 레벨: 1
// 유형: 구현
// URL: https://school.programmers.co.kr/learn/courses/30/lessons/12940

// 솔루션 코드
function solution(n, m) {
    const result = [];
    for (let i = Math.min(m, n); i > 0; i--) {
        if (n % i === 0 && m % i === 0) {
            result.push(i);
            break;
        }
    }
    for (let i = Math.max(m, n); i <= m * n; i++) {
        if (i % n === 0 && i % m === 0) {
            result.push(i);
            break;
        }
    }
    return result;
}
