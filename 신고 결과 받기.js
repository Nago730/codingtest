// 신고 결과 받기
// 프로그래머스 1단계

function solution(id_list, report, k) {
    const map = new Map();
    const IDX = 0, COUNT = 1, REPORTERS = 2;
    id_list.forEach((id, idx) => map.set(id, [idx, 0, []]));
    report.forEach(val => {
        const [a, b] = val.split(' ');
        if (!map.get(b)[REPORTERS].includes(a)) {
            map.get(b)[REPORTERS].push(a);
            map.get(b)[COUNT]++
        }
    });
    const mail = new Array(id_list.length).fill(0);
    console.log(mail);
    map.forEach((val, key) => {
        if (val[COUNT] >= k) {
            val[REPORTERS].forEach(person => mail[map.get(person)[IDX]]++);
        }
    });
    return mail;
}