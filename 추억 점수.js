// 추억 점수
// 프로그래머스 1단계

function solution(name, yearning, photo) {
    const map = new Map();
    const answer = [];
    for (let i = 0; i < name.length; i++) {
        map.set(name[i], yearning[i])
    }
    for (const arr of photo) {
        let num = 0;
        arr.forEach(element => {
            if (map.get(element)) {
                num += map.get(element);
            }
        })
        answer.push(num);
    }
    return answer;
}