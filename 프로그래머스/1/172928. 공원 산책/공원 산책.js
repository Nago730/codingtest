function solution(park, routes) {
    const idx = [];
    let curr = [];
    for (let i = 0; i < park.length; i++) {
        idx[i] = park[i].split('');
    }
    idx.forEach((arr, i) => {
        arr.forEach((v, k) => {
            if (v === 'S') {
                curr = [i, k]
            }
        });
    });
    label: for (const val of routes) {
        let [op, n] = val.split(' ');
        n = Number(n);
        let y = curr[0];
        let x = curr[1];
        switch (op) {
            case 'E': 
                for (let i = 1; i <= n; i++) {
                    if (!idx[y] || idx[y][x + i] === 'X' || idx[y][x + i] === undefined) {
                        continue label;
                    }
                }
                break;
            case 'W':
                for (let i = 1; i <= n; i++) {
                    if (!idx[y] || idx[y][x - i] === 'X' || idx[y][x - i] === undefined) {
                        continue label;
                    }
                }
                break;
            case 'S':
                 for (let i = 1; i <= n; i++) {
                    if (!idx[y + i] || idx[y + i][x] === 'X' || idx[y + i][x] === undefined) {
                        continue label;
                    }
                }
                break;
            case 'N':
                 for (let i = 1; i <= n; i++) {
                    if (!idx[y - i] || idx[y - i][x] === 'X' || idx[y - i][x] === undefined) {
                        continue label;
                    }
                }
                break;
        }
        switch (op) {
            case 'E': curr[1] += n;
                break;
            case 'W': curr[1] -= n;
                break;
            case 'S': curr[0] += n;
                break;
            case 'N': curr[0] -= n;
                break;
        }
    }
    return curr;
}