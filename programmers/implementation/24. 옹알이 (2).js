// 옹알이 (2)
// 플랫폼: Programmers
// 레벨: 1
// 유형: 문자열 처리
// URL: https://school.programmers.co.kr/learn/courses/30/lessons/133499

// 솔루션 코드
const solution = b => b.filter(v => /^(?!.*?(aya|ye|woo|ma)\1)(aya|ye|woo|ma)+$/.test(v)).length;
