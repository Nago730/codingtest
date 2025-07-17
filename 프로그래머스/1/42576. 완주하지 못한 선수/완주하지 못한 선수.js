function solution(participant, completion) {
    let answer;
    const map = new Map();
    for (const v of completion) {
        map.get(v) ? (map.set(v, map.get(v) + 1)) : (map.set(v, 1));
    }
    for (const v of participant) {
        if (map.get(v)) {
            map.set(v, map.get(v) - 1);
        } else {
            answer = v;
            break;
        }
    }
    return answer;
}