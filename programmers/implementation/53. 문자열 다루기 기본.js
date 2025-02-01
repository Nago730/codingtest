// 문자열 다루기 기본
// 플랫폼: Programmers
// 레벨: 1
// 유형: 문자열 처리
// URL: https://school.programmers.co.kr/learn/courses/30/lessons/12918

// 솔루션 코드
function solution(s) {
    return /^\d+$/.test(s) ? s.length === 4 || s.length === 6 : false;
}