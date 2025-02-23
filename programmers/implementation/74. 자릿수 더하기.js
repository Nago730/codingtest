// 자릿수 더하기기
// 플랫폼: Programmers
// 레벨: 1
// 유형: 구현
// URL: https://school.programmers.co.kr/learn/courses/30/lessons/12931

// 솔루션 코드
function solution(n) {
    return String(n).split('').reduce((a, c) => a + +c, 0);
}