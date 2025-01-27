// 모의고사
// 플랫폼: Programmers
// 레벨: 1
// 유형: 구현
// URL: https://school.programmers.co.kr/learn/courses/30/lessons/42840

// 솔루션 코드
function solution(answers) {
    const answer = [];
    const aa = [1,2,3,4,5], // aa: a의 answer
          ba = [2,1,2,3,2,4,2,5], // ba: b의 answer
          ca = [3,3,1,1,2,2,4,4,5,5];  // ca: a의 answer
    let [a, b, c] = [0, 0, 0]; // [a, b, c]의 정답 횟수
        let [ac, bc, cc] = [0, 0, 0]; // c: count
    answers.forEach(v => {
        if (v === aa[ac]) a++;
        if (v === ba[bc]) b++;
        if (v === ca[cc]) c++;
        ac++; bc++; cc++;
        if (ac === 5) ac = 0;
        if (bc === 8) bc = 0;
        if (cc === 10) cc = 0;
    });
    [a, b, c].forEach((v, idx) => {
        if (v === Math.max(a, b, c)) {
            answer.push(idx + 1);
        }
    });
    return answer;
}