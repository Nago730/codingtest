// 나머지가 1이 되는 수 찾기
// 플랫폼: Programmers
// 레벨: 1
// 유형: 구현
// URL: https://school.programmers.co.kr/learn/courses/30/lessons/87389

// 솔루션 코드
function solution(n) {
    for (let i = 0; i < n; i++) {
        if (n % i === 1) return i;
    }
}