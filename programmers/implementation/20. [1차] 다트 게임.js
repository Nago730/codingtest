// 다트 게임
// 플랫폼: Programmers
// 레벨: 1
// 유형: 구현
// URL: https://school.programmers.co.kr/learn/courses/30/lessons/17682

// 솔루션 코드
function solution(dartResult) {
    const result = [];
    const separate = dartResult.match(/\d+[SDT][\*\#]?/g);
    const bonus = {'S': 1, 'D': 2, 'T': 3};
    
    for (const [idx, item] of separate.entries()) {
        let number = item.match(/\d+/)[0],
            bonusType = item.match(/[SDT]/)[0],
            option = item.match(/[\*\#]/)?.[0] || '';
        
        result[idx] = number ** bonus[bonusType];
        
        if (option === '*') {
            result[idx] *= 2;
            if (idx > 0) {
                result[idx - 1] *= 2;
            }
        } else if (option === '#') {
            result[idx] *= -1;
        }
    }
    
    return result.reduce((acc, cur) => acc + cur);
}

// 더 나은 코드
// options를 추가하여 if문을 줄임 (point: option이 없는 경우 1로 처리)
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
