// 가장 많이 받은 선물
// 프로그래머스 1단계

function solution(friends, gifts) {
    const flen = friends.length;
    const glen = gifts.length;
    const arr = [];
    for (i = 0; i < flen; i++) {
        arr[i] = [];
        for (k = 0; k < flen; k++) {
            arr[i][k] = 0;
        }
    }
    for (i = 0; i < flen; i++) {
        for (k = 0; k < glen; k++) {
            const [givf, recf] = gifts[k].split(' ');
            switch (givf) {
                case friends[i]:
                    for (l = 0; l < flen; l++) {
                        if (recf === friends[l]) {
                            arr[i][l] += 1;
                            break;
                        }
                    }
            }
        }
    }
    const preIndex = [];
    for (i = 0; i < flen; i++) {
        preIndex[i] = 0;
    }
    for (i = 0; i < flen; i++) {
        let givNum = 0;
        let recNum = 0;
        for (k = 0; k < glen; k++) {
            const [givf, recf] = gifts[k].split(' ');
            if (givf === friends[i]) {
                givNum++;
            } else if (recf === friends[i]) {
                recNum++;
            }
        }
        preIndex[i] = givNum - recNum;
    }
    const newPre = [];
    for (i = 0; i < flen; i++) {
        newPre[i] = 0;
    }
    for (i = 0; i < flen; i++) {
        for (k = 0; k < flen; k++) {
            if (i === k) {
                break;
            }
            if (arr[i][k] > arr[k][i]) {
                newPre[i] += 1;
            } else if (arr[i][k] < arr[k][i]) {
                newPre[k] += 1;
            } else if (arr[i][k] === arr[k][i]) {
                if (preIndex[i] > preIndex[k]) {
                    newPre[i] += 1;
                } else if (preIndex[i] < preIndex[k]) {
                    newPre[k] += 1;
                }
            }
        }
    }
    let howmany = 0;
    for (i = 0; i < flen; i++) {
        if (newPre[i] > howmany) {
            howmany = newPre[i]
        }
    }
    return howmany;
}

// 2개월만에 새롭게 풀어봄 훨씬 간결해진 코드 굿
function solution(friends, gifts) {
    const log = {}; // 이름: {give: {name: n, name2: n}, index: n, receive: n}
    friends.forEach(v => {
        log[v] = {give: {}, index: 0, receive: 0};
        friends.forEach(f => log[v].give[f] = 0);
    });
    
    gifts.forEach(v => {
        const [g, r] = v.split(' ');
        log[g].give[r] ? log[g].give[r]++ : log[g].give[r] = 1;
        log[g].index++;
        log[r].index--;
    });
    
    for (let i = 0; i < friends.length; i++) {
        const a = friends[i];
        for (let j = i + 1; j < friends.length; j++) {
            const b = friends[j];
            if (log[a].give[b] > log[b].give[a]) {
                log[a].receive++;
            } else if (log[a].give[b] < log[b].give[a]) {
                log[b].receive++;
            } else if (log[a].give[b] === log[b].give[a]) {
                if (log[a].index > log[b].index) {
                    log[a].receive++;
                } else if (log[a].index < log[b].index) {
                    log[b].receive++;
                }
            }
        }
    }
    
    return Math.max(...Object.keys(log).map(v => log[v].receive));
}
