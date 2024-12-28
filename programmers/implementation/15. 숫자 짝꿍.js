// 숫자 짝궁
// 플랫폼: Programmers
// 레벨: 1
// 유형: 구현, 문자열 처리
// URL: https://school.programmers.co.kr/learn/courses/30/lessons/131128

// 솔루션 코드
function solution(X, Y) {
    const answer = [];
    const map = new Map()
    for (let i = 9; i >= 0; i--) map.set(i, [0, 0]);
    for (const v of X) map.get(+v)[0]++;
    for (const v of Y) map.get(+v)[1]++;
    map.forEach((value, key) => {
        for (let i = 0; i < Math.min(...value); i++) answer.push(key);
    })
    if (!answer.length) return '-1';
    if (!+answer.join('')) return '0';
    return answer.join('')
}