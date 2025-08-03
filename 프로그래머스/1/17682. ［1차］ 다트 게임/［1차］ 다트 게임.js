function solution(dartResult) {
    const result = [];
    const separate = dartResult.match(/\d+[SDT][\*\#]?/g);
    const bonus = {'S': 1, 'D': 2, 'T': 3};
    const options = {'*': 2, '#': -1, '': 1};
    
    for (const [idx, item] of separate.entries()) {
        let number = item.match(/\d+/)[0],
            bonusType = item.match(/[SDT]/)[0],
            optionType = item.match(/[\*\#]/)?.[0] || '';
        
        result[idx] = number ** bonus[bonusType] * options[optionType];
        
        if (optionType === '*' && idx > 0) {
            result[idx - 1] *= options[optionType];
        }
    }
    
    return result.reduce((acc, cur) => acc + cur);
}