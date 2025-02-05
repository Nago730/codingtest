// 수박수박수...
// 플랫폼: Programmers
// 레벨: 1
// 유형: 문자열 처리, 구현
// URL: https://school.programmers.co.kr/learn/courses/30/lessons/12922

// 솔루션 코드
function solution(n) {
    let str = '';
    for (let i = 0; i < n; i++) {
        i % 2 ? str += '박' : str += '수';
    }
    return str;
}