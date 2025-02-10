// 가운데 글자 가져오기기
// 플랫폼: Programmers
// 레벨: 1
// 유형: 문자열 처리
// URL: https://school.programmers.co.kr/learn/courses/30/lessons/12903

// 솔루션 코드
function solution(s) {
    return s.length % 2 === 0 ? [...s].splice(s.length/2 - 1, 2).join('') : [...s].splice(Math.floor(s.length/2), 1).join('');
}