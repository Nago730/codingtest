// 시저 암호
// 플랫폼: Programmers
// 레벨: 1
// 유형: 문자열 처리, 구현
// URL: https://school.programmers.co.kr/learn/courses/30/lessons/12926

// 솔루션 코드
function solution(s, n) {
    // console.log('a'.charCodeAt());
    // console.log('z'.charCodeAt());
    // console.log('A'.charCodeAt());
    // console.log('Z'.charCodeAt());
    return s.split('').map(v => {
        const code = v.charCodeAt();
        if (code === 32) return ' ';
        if (code < 91) {
            return String.fromCharCode(code + n < 91 ? code + n : code + n - 26);
        } else if (code < 123) {
            return String.fromCharCode(code + n < 123 ? code + n : code + n - 26);
        }
    }).join('');
}

// 비트 연산 코드
function caesar(s, n) {
    var result = s.replace(/[a-z]/ig, c => [ c = c.charCodeAt(0), String.fromCharCode((c & 96) + (c % 32 + n - 1) % 26 + 1) ][1]);

    return result;
}