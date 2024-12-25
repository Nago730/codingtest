// 신규 아이디 추천
// 프로그래머스 1단계

function solution(new_id) {
    new_id = [...new_id].map(v => /[A-Z]/.test(v) ? v.toLowerCase() : v).join('');
    new_id = new_id.replace(/[^\w\-\.]+/g, '');
    new_id = new_id.replace(/\.{2,}/g, '.');
    new_id = new_id.replace(/^\.|\.$/g, '');
    if (new_id === '') new_id ='a';
    if (new_id.length > 15) {
        new_id = new_id.slice(0,15)
        new_id = new_id.replace(/\.$/, '')
    };
    if (new_id.length < 3) {
        let l = new_id.charAt(new_id.length - 1)
        let len = 3 - new_id.length
        for (let i = 0; i < len; i++) {
            new_id += l;
        }
    }
    return new_id;
}

// 더 깔끔한 풀이
// 메서드 체이닝
// 삼항연산자
// repeat

function solution(new_id) {
    const answer = new_id
        .toLowerCase() // 1
        .replace(/[^\w-_.]/g, '') // 2
        .replace(/\.+/g, '.') // 3
        .replace(/^\.|\.$/g, '') // 4
        .replace(/^$/, 'a') // 5
        .slice(0, 15).replace(/\.$/, ''); // 6
    const len = answer.length;
    return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
}