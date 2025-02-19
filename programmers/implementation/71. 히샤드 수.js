// 히샤드 수
// 플랫폼: Programmers
// 레벨: 1
// 유형: 수학, 구현
// URL: https://school.programmers.co.kr/learn/courses/30/lessons/12947

// 솔루션 코드
function solution(x) {
    return x%String(x).split('').map(Number).reduce((a,c)=>a+c)===0
}