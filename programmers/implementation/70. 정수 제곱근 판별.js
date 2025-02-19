// 정수 제곱근 판별
// 플랫폼: Programmers
// 레벨: 1
// 유형: 수학, 구현
// URL: https://school.programmers.co.kr/learn/courses/30/lessons/12934

// 솔루션 코드
function solution(n) {
    return Number.isInteger(Math.sqrt(n)) ? (Math.sqrt(n) + 1)**2 : -1;
}