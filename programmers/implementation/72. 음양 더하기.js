// 음양 더하기
// 플랫폼: Programmers
// 레벨: 1
// 유형: 구현
// URL: https://school.programmers.co.kr/learn/courses/30/lessons/76501

// 솔루션 코드
function solution(absolutes, signs) {
    return absolutes.reduce((a, c, i) => a += signs[i] ? c : -c, 0);
}