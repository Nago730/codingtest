// 기사단원의 무기
// 플랫폼: Programmers
// 레벨: 1
// 유형: 구현
// URL: https://school.programmers.co.kr/learn/courses/30/lessons/136798

// 솔루션 코드
function solution(number, limit, power) {
    let answer = 0;
    for (let i = 1; i <= number; i++) {
        const v = get(i);
        if (v > limit) {
            answer += power;
        } else {
            answer += v;
        }
    }
    return answer;
}

function get(n) {
    const obj = {};
    let result = 1;
    for (let i = 2; i <= n; i++) {
        if (Number.isInteger(n / i)) {
            obj[i] = 1;
            while (Number.isInteger(n / i)) {
                n /= i;
                obj[i]++;
            }
        }
    }
    for (const key in obj) {
        result *= obj[key];
    }
    return result;
}