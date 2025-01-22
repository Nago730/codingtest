// 푸드 파이트 대회.js
// 플랫폼: Programmers
// 레벨: 1
// 유형: 문자열 처리
// URL: https://school.programmers.co.kr/learn/courses/30/lessons/134240

// 솔루션 코드
function solution(food) {
    let answer = '';
    food = food.map(v => Math.floor(v/2));
    for (let i = 1; i < food.length; i++) {
        for (let k = 0; k < food[i]; k++) {
            answer += String(i);
        }
    }
    answer += '0';
    for (let i = food.length - 1; i > 0; i--) {
        for (let k = 0; k < food[i]; k++) {
            answer += String(i);
        }
    }
    return answer;
}

// 다른 코드
function solution(food) {
    let str = food.reduce((a, c, i) =>  a + String(i).repeat(Math.floor(c/2)),'');
    return str + '0' + str.split('').reverse().join('');
}