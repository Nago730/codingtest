// 대충 만든 자판    
// 플랫폼: Programmers
// 레벨: 1
// 유형: 구현
// URL: https://school.programmers.co.kr/learn/courses/30/lessons/160586

// 솔루션 코드
function solution(keymap, targets) {
    let result;
    const map = new Map();
    keymap.forEach((str, arrI) => {
        [...str].forEach((char, strI) => {
            if (!map.get(char)) {
                map.set(char, strI + 1);
            } else if (map.get(char) > strI + 1) {
                map.set(char, strI + 1);
            }
        });
        result = targets.map((target, tarI) => {
            let amount = 0;
            for (let i = 0; i < target.length; i++) {
                if (map.get(target.at(i)) === undefined) return -1;
                amount += map.get(target.at(i));
            }
            return amount;
        });
    });
    return result;
}