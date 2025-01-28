// 3진법 뒤집기
// 플랫폼: Programmers
// 레벨: 1
// 유형: 구현
// URL: https://school.programmers.co.kr/learn/courses/30/lessons/68935

// 솔루션 코드
function solution(n) {
    let answer = 0;
    let trit = '';
    let power = 0;
    for (let i = 0; i <= 17; i++) {
        if (3 ** i > n) {
            power = i - 1;
            break;
        }
    }
    for (let i = power; i >= 0; i--) {
        let quotient = Math.floor(n / (3 ** i));
        n %= 3 ** i;
        trit += String(quotient);
    }
    [...trit].forEach((v, i) => answer += v * (3 ** i));
    return answer;
}

// 내장함수를 이용한 간단한 풀이
function solution(n) {
    return parseInt([...n.toString(3)].reverse().join(''), 3);
}
// parseInt(x, n) : n진수인 숫자 x를 10진수으로 변환
// n.toString(n) : 10진수를 n진수로 변환