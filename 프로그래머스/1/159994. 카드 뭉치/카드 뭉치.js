function solution(cards1, cards2, goal) {
    let [i1, i2, answer] = [0, 0, "Yes"];
    
    for (let i = 0; i < goal.length; i++) {
        const target = goal[i];
        if (cards1[i1] === target) {
            i1++;
        } else if (cards2[i2] === target) {
            i2++;
        } else {
            answer = "No";
        }
    }
    
    return answer;
}