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

// 추가 최적화 방법
// 1. Set 활용
const uniqueReports = [...new Set(report)];  // 중복 신고 미리 제거

// 2. includes 대신 Set 사용
map.set(id, [idx, 0, new Set()]);
map.get(b)[REPORTERS].add(a);

// 3. 구조분해할당 활용
map.forEach(([idx, count, reporters], id) => {
    if (count >= k) {
        reporters.forEach(person => {
            const [personIdx] = map.get(person);
            mail[personIdx]++;
        });
    }
});

// 4. Map 대신 객체 사용 가능
const users = {};
id_list.forEach((id, idx) => {
    users[id] = { idx, count: 0, reporters: new Set() };
});
// 이유:
// 장점:
// 1. 더 직관적인 데이터 구조
// 2. JSON으로 변환 가능
// 3. 구조분해할당이 더 편리함

// 단점:
// 1. 키가 문자열/심볼만 가능 (Map은 어떤 타입이든 가능)
// 2. 크기를 바로 알 수 없음 (Object.keys(users).length 필요)
// 3. 순회가 Map보다 덜 편리함
// 보통은:
// 단순한 키-값 저장이면 객체
// 복잡한 자료구조면 Map
// 을 선택합니다!
