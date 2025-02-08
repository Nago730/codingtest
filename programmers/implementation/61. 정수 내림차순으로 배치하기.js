// 정수 내림차순으로 배치하기
// 플랫폼: 프로그래머스
// 레벨: 1
// 유형: 문자열 처리
// URL: https://school.programmers.co.kr/learn/courses/30/lessons/12933

// 솔루션 코드
function solution(n) {
    return Number(String(n).split('').sort((a, b) => b - a).join(''));
}