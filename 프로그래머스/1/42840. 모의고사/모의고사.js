function solution(answers) {
    const a = [1,2,3,4,5];
    const b = [2,1,2,3,2,4,2,5];
    const c = [3,3,1,1,2,2,4,4,5,5];
    
    let countA = 0;
    let countB = 0;
    let countC = 0;
    
    answers.forEach((answer, idx) => {
        if (answer === a[idx % 5]) countA++;
        if (answer === b[idx % 8]) countB++;
        if (answer === c[idx % 10]) countC++;
    });
    
    const maxCount = Math.max(countA, countB, countC);

    const result = [];
    
    if (countA === maxCount) result.push(1);
    if (countB === maxCount) result.push(2);
    if (countC === maxCount) result.push(3);
    
    return result;
}