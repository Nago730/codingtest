// 문자열 내림차순으로 배치하기
// 플랫폼: Programmers
// 레벨: 1
// 유형: 문자열 처리
// URL: https://school.programmers.co.kr/learn/courses/30/lessons/12917

// 솔루션 코드
function solution(s) {
    return s.split('').map(s => s.charCodeAt()).sort((a, b) => b - a).map(n => String.fromCharCode(n)).join('');
}