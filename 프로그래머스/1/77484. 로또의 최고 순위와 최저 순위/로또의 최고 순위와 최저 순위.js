function solution(lottos, win_nums) {
    const rank = [6, 6, 5, 4, 3, 2, 1],
          acc = {'match': 0, 'unknown': 0};
    
    lottos.forEach(n => {
        acc.match = win_nums.includes(n) ? acc.match + 1 : acc.match;
        acc.unknown = n === 0 ? acc.unknown + 1 : acc.unknown;
    });
    
    return [rank[acc.match + acc.unknown], rank[acc.match]];
}