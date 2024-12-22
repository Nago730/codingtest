// 공원 산책
// 프로그래머스 1단계
// 문제 틀림

function solution(park, routes) {
    const curr = [];
    for (let i = 0; i < park.length; i++) {
        if (park[i].indexOf('S') !== -1) {
            curr[0] = i;
            curr[1] = park[i].indexOf('S');
            break;
        }
    }
    for (const move of routes) {
        let [a, b] = move.split(' ');
        b = Number(b);
        lable: switch (a) {
            case 'E':
                if (park[curr[0]].slice(curr[1] + b) === '') {
                    break lable;
                }
                for (let i = 0; i < b; i++) {
                    if (park[curr[0]].slice(curr[1] + i + 1) === 'X') {
                        break lable;
                    }
                }
                curr[1] += b;
                break;
            case 'W':
                if (curr[1] < b) {
                    break lable;
                }
                for (let i = 0; i < b; i++) {
                    if ((park[curr[0]].slice(curr[1] - i - 1) === 'X')) {
                        break lable;
                    }
                }
                curr[1] -= b;
                break;
            case 'S':
                if (curr[0] + b > park.length - 1) {
                    break lable;
                }
                for (let i = 0; i < b; i++) {
                    if (park[curr[0] + i + 1].slice(curr[1], curr[1] + 1) === 'X') {
                        break lable;
                    }
                }
                curr[0] += b;
                break;
            case 'N':
                if (curr[0] - b < 0) {
                    break lable;
                }
                for (let i = 0; i < b; i++) {
                    if (park[curr[0] - i - 1].slice(curr[1], curr[1] + 1) === 'X') {
                        break lable;
                    }
                }
                curr[0] -= b;
                break;
        }
    }
    return curr;
}