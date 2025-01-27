// 명예의 전당(1)
// 플랫폼: Programmers
// 레벨: 1
// 유형: 구현
// URL: https://school.programmers.co.kr/learn/courses/30/lessons/138477

// 솔루션 코드
function solution(k, score) {
    const result = [];
    let stage = [];
    let min = score[0];
    score.forEach(v => {
        if (stage.length < k) {
            stage.push(v)
            if (v < min) {
                min = v;
            }
            result.push(min);
        } else {
            if (v > min) {
                stage = stage.sort((a, b) => b - a)
                stage.pop();
                stage.push(v);
                min = stage[k - 2];
                if (min > v) {
                    min = v;
                }
            }
            result.push(min)
        }
    })
    return result;
}