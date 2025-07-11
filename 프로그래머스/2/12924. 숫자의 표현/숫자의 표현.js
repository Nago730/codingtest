function solution(n) {
    if(n === 1 || n === 2) return 1;
    let answer = 1;
    for (let i = (Math.floor(n/2) + 1); i > 0; i--) {
       answer += isPossible(n, i);
    }
    return answer;
}

function isPossible(n, startIdx) {
    let sum = 0;
    for (let i = startIdx; i > 0; i--) {
        if (sum >= n) break;
        else sum += i;
    }
    return sum === n ? true : false;
}