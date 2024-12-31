// 로또의 최고 순위와 최저 순위
// 플랫폼: Programmers
// 레벨: 1
// 유형: 구현
// URL: https://school.programmers.co.kr/learn/courses/30/lessons/77484

// 솔루션 코드
function solution(lottos, win_nums) {
    const num = {
        'matched': 0,
        'unknown': 0
    }

    lottos.forEach(v => {
        if (win_nums.includes(v)) {
            num.matched++;
        } else if (v === 0) {
            num.unknown++;
        }
    });

    return [
        Math.min(7 - (num.matched + num.unknown), 6), 
        Math.min(7 - num.matched, 6)
    ];
}

// 더 나은 코드
// point: 순위를 배열로 처리하여 return 코드를 간결하게 함
function solution(lottos, win_nums) {
    const rank = [6, 6, 5, 4, 3, 2, 1],
          acc = {'match': 0, 'unknown': 0};
    
    lottos.forEach(n => {
        acc.match = win_nums.includes(n) ? acc.match + 1 : acc.match;
        acc.unknown = n === 0 ? acc.unknown + 1 : acc.unknown;
    });
    
    return [rank[acc.match + acc.unknown], rank[acc.match]];
}