// x만큼 간격이 있는 n개의 숫자
// 플랫폼: Programmers
// 레벨: 1
// 유형: 구현
// URL: https://school.programmers.co.kr/learn/courses/30/lessons/12954

// 솔루션 코드
function solution(x, n) {
    return Array.from({ length: n}).map((v, i) => (i + 1) * x);
}