function solution(s) {
    const n = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let answer = s;
    for (let i = 0; i < n.length; i++) {
        let arr = answer.split(n[i]);
        answer = arr.join(i);
    }
    return Number(answer);
}