// 키패드 누르기
// 프로그래머스 1단계

function solution(numbers, hand) {
    let touch = '';
    let [lh, rh] = ['*', '#'];
    const keypad = new Map([
    [1, [0, 0]], [2, [0, 1]], [3, [0, 2]],
    [4, [1, 0]], [5, [1, 1]], [6, [1, 2]],
    [7, [2, 0]], [8, [2, 1]], [9, [2, 2]],
    ['*', [3,0]], [0, [3, 1]], ['#', [3, 2]]
    ]);
    for (const v of numbers) {
        if (/[147]/.test(v)) {
            touch += 'L';
            lh = v;
            continue;
        } else if (/[369]/.test(v)) {
            touch += 'R';
            rh = v;
            continue;
        } else {
            let ld = Math.abs(keypad.get(lh)[0] - keypad.get(v)[0]) + Math.abs(keypad.get(lh)[1] - keypad.get(v)[1]);
            let rd = Math.abs(keypad.get(rh)[0] - keypad.get(v)[0]) + Math.abs(keypad.get(rh)[1] - keypad.get(v)[1]);
            if (ld < rd) {
                touch += 'L';
                lh = v;
                continue;
            } else if (ld > rd) {
                touch += 'R';
                rh = v;
                continue;
            } else if (ld === rd) {
                if (hand === 'left') {
                    touch += 'L';
                    lh = v;
                    continue;
                } else {
                    touch += 'R';
                    rh = v;
                    continue;
                }
            }
        }
    }
    return touch;
}
