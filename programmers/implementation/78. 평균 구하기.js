// 평균 구하기
// 플랫폼: Programmers
// 레벨: 1
// 유형: 구현
// URL: https://school.programmers.co.kr/learn/courses/30/lessons/12944

// 솔루션 코드
function solution(arr) {
    return arr.reduce((a, c) => a + c)/arr.length;
}