// 이상한 문자 만들기.js
// 플랫폼: Programmers
// 레벨: 1
// 유형: 문자열 처리
// URL: https://school.programmers.co.kr/learn/courses/30/lessons/12930

// 솔루션 코드
function solution(s) {
    return s.split(' ').map(str => {
        return str.split('').map((v, i) => i%2 === 0 ? v.toUpperCase() : v.toLowerCase()).join('');
    }).join(' ');
}