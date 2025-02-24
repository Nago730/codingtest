// 약수의 합합
// 플랫폼: Programmers
// 레벨: 1
// 유형: 수학, 구현
// URL: https://school.programmers.co.kr/learn/courses/30/lessons/12928

// 솔루션 코드
function solution(n) {
    if (n === 0) return 0;
    const factors = new Set();
    for (let pod = 1; pod <= Math.sqrt(n); pod++) {
        if (n % pod == 0) {
            factors.add(pod);
            factors.add(n / pod);
        }
    }
    return [...factors].reduce((a, c) => a + c, 0);
}