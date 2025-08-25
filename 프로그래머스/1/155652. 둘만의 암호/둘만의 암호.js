function solution(s, skip, index) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('').filter(element => !skip.includes(element));
    return s.split('').map((v, i) => alphabet[(alphabet.indexOf(v) + index) % alphabet.length]).join('');
}