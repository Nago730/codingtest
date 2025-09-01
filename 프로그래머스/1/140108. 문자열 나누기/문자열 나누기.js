function solution(s) {
    let result = 0;
    
    while (s) {
        const x = s.at(0);
        const count = {'x': 0, 'ex': 0};
        
        for (let i = 0; i < s.length; i++) {
            if (s.at(i) === x) {
                count.x++;
            } else {
                count.ex++;
            }
            if (count.x === count.ex) {
                result++;
                s = s.slice(i + 1);
                break;
            } else if (i + 1 === s.length) {
                result++;
                s = s.slice(i + 1);
                break;
            }
        }
    }
    return result;
}