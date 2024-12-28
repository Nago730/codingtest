// 체육복
// 플랫폼: Programmers
// 레벨: 1
// 유형: 구현
// URL: https://school.programmers.co.kr/learn/courses/30/lessons/42862

// 솔루션 코드
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

// 더 나은 솔루션
function solution(n, lost, reserve) {
    const students = {};
    let answer = 0;
    for(let i = 1; i <= n; i++){
        students[i] = 1;
    }
    lost.forEach(number => students[number] -= 1);
    reserve.forEach(number => students[number] += 1);

    for(let i = 1; i <= n; i++){
        if(students[i] === 2 && students[i-1] === 0){
                students[i-1]++;
                students[i]--;
        } else if(students[i] === 2 && students[i+1] === 0){
                students[i+1]++;
                students[i]--;
        }
    }
    for(let key in students){
        if(students[key] >= 1){
            answer++;
        }
    }
    return answer;
}