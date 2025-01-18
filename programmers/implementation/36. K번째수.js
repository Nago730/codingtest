// K번째수
// 플랫폼: Programmers
// 레벨: 1
// 유형: 구현
// URL: https://school.programmers.co.kr/learn/courses/30/lessons/42748

// 솔루션 코드
function solution(array, commands) {
    const answer = [];
    commands.forEach(cmd => {
        let arr = [];
        for (let i = cmd[0] - 1; i < cmd[1]; i++) {
            arr.push(array[i]);
        }
        arr = arr.sort((a, b) => a - b);
        answer.push(arr[cmd[2] - 1]);
    });
    return answer;
}