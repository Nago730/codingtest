function solution(n, lost, reserve) {
    for (let i = 0; i < lost.length; i++) {
        for (let k = 0; k < reserve.length; k++) {
            if (lost[i] === reserve[k]) {
                lost.splice(i, 1);
                reserve.splice(k, 1);
                i--; k--;
            }
        }
    }
    lost.sort((a, b) => a - b);
    reserve.sort((a, b) => a - b);
    let answer = n - lost.length;
    for (const l of lost) {
        for (let i = 0; i < reserve.length; i++) {
            if (l - 1 === reserve[i]) {
                answer++;
                reserve.splice(i, 1);
                i--;
                break;
            } else if (l + 1 === reserve[i]) {
                answer++;
                reserve.splice(i, 1);
                i--;
                break;
            }
        }
    }
    return answer;
}