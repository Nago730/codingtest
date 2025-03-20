// 자연수 뒤집어 배열로 만들기
// 플랫폼: Programmers
// 레벨: 1
// 유형: 구현
// URL: https://school.programmers.co.kr/learn/courses/30/lessons/12932

// 솔루션 코드
function solution(n) {
    return [...(n + '')].map(Number).reverse();
}