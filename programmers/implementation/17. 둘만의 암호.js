// 둘만의 암호    
// 플랫폼: Programmers
// 레벨: 1
// 유형: 문자열 처리
// URL: https://school.programmers.co.kr/learn/courses/30/lessons/155652

// 솔루션 코드
function solution(s, skip, index) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const uniqueAlphabet = alphabet.filter(element => !skip.includes(element));
    for (let i = 0; i < index; i++) {
        uniqueAlphabet.push(uniqueAlphabet[i]);
    }
    return s.split('').reduce((acc, cur, i) => {
        acc[i] = uniqueAlphabet[uniqueAlphabet.indexOf(cur) + index];
        return acc;
    }, []).join('');
}

// 최적화 솔루션
function solution(s, skip, index) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('').filter(element => !skip.includes(element));
    return s.split('').map((v, i) => alphabet[(alphabet.indexOf(v) + index) % alphabet.length]).join('');
}