// 없는 숫자 더하기
// 플랫폼: Programmers
// 레벨: 1
// 유형: 구현
// URL: https://school.programmers.co.kr/learn/courses/30/lessons/86501

// 솔루션 코드
function solution(numbers) {
    return 45 - numbers.reduce((a, c) => a + c);
}