// 숫자 문자열과 영단어
// 플랫폼: Programmers
// 레벨: 1
// 유형: 문자열 처리
// URL: https://school.programmers.co.kr/learn/courses/30/lessons/81301

// 솔루션 코드
function solution(s) {
    return Number(s.replace(/zero/, 0)
        .replace(/one/g, 1)
        .replace(/two/g, 2)
        .replace(/three/g, 3)
        .replace(/four/g, 4)
        .replace(/five/g, 5)
        .replace(/six/g, 6)
        .replace(/seven/g, 7)
        .replace(/eight/g, 8)
        .replace(/nine/g, 9));
}

// 다른 코드
function solution(s) {
    const n = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let answer = s;
    for (let i = 0; i < n.length; i++) {
        let arr = answer.split(n[i]);
        answer = arr.join(i);
    }
    return Number(answer);
}