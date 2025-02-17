// 문자열 내p와 y의 개수
// 플랫폼: Programmers
// 레벨: 1
// 유형: 구현
// URL: https://school.programmers.co.kr/learn/courses/30/lessons/12916

// 솔루션 코드
function solution(s){
    return s.toLowerCase().split('p').length === s.toLowerCase().split('y').length;
}