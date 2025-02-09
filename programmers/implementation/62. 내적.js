// 내적적
// 플랫폼: 프로그래머스스
// 레벨: 1
// 유형: 구현
// URL: https://school.programmers.co.kr/learn/courses/30/lessons/70128

// 솔루션 코드
function solution(a, b) {
    return a.reduce((acc, a, i) => acc += a * b[i], 0)
}