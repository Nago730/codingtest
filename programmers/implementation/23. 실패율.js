// 실패율
// 플랫폼: Programmers
// 레벨: 1
// 유형: 구현
// URL: https://school.programmers.co.kr/learn/courses/30/lessons/42889

// 솔루션 코드
function solution(N, stages) {
    const map = new Map();
    const fail = new Map();

    for (let i = 1; i <= N + 1; i++) {
        map.set(i, [0, 0]); // 스테이지: [클리어 못한 수, 클리어 한 수]
    }

    for (const stage of stages) {
        map.get(stage)[0]++;
    }
    map.set(N + 1, [map.get(N + 1)[0], map.get(N + 1)[0]]);

    for (let i = map.size - 1; i >= 1; i--) {
        map.get(i)[1] = map.get(i)[0] + map.get(i + 1)[1];
    }

    for (let i = 1; i <= map.size; i++) {
        if (map.get(i)[1] !== 0) fail.set(i, map.get(i)[0] / map.get(i)[1])
        else fail.set(i, 0);
    }

    const sortedFail = new Map([...fail].sort((a, b) => b[1] - a[1]));
    sortedFail.delete(N + 1);

    return [...sortedFail].map(item => item[0]);
}

// 시간복잡도 신경쓰지 않은 짧은 코드 (다른 사람의 풀이에서, 좋아요 많이 눌림)
function solution(N, stages) {
    let result = [];
    for(let i=1; i<=N; i++){
        let reach = stages.filter((x) => x >= i).length;
        let curr = stages.filter((x) => x === i).length;
        result.push([i, curr/reach]);
    }
    result.sort((a,b) => b[1] - a[1]);
    return result.map((x) => x[0]);
}