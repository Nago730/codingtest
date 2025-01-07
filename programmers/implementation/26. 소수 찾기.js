// 소수 찾기
// 플랫폼: Programmers
// 레벨: 1
// 유형: 구현
// URL: https://school.programmers.co.kr/learn/courses/30/lessons/12921

// 솔루션 코드
function solution(n) {
    const isPrime = new Array(n + 1).fill(true);
    isPrime[0] = isPrime[1] = false;
    for (let i = 2; i * i <= n; i++) {
         if (isPrime[i]) {
             for (let j = 2 * i; j <= n; j += i) {
                 isPrime[j] = false;
             }
         }
    }
    return isPrime.filter(Boolean).length;
}