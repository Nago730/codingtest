// 개인정보 수집 유효기간
// 프로그래머스 1단계

function solution(today, terms, privacies) {
    const [yy, mm, dd] = today.split('.').map(v => +v);
    const termsMap = new Map(terms.map(v => v.split(' ')));
    const answer = [];
    const pri = privacies.map(v => {
        let [y, m, d, t] = v.split(/[.\s]/).map((v, i) => i < 3 ? +v : +termsMap.get(v));
        m += t;
        if (d === 1) {
            d = 28; m--;
        } else {
            d -= 1;
        }
        while (m > 12) {
            m -= 12; y++;
        }
        return [y, m, d];
    })
    pri.forEach((v, idx) => {
        if (v[0] < yy) {
            answer.push(idx + 1);
            return;
        } else if (v[0] > yy) {
            return;
        } else if (v[1] < mm) {
            answer.push(idx + 1);
            return;
        } else if (v[1] > mm) {
            return;
        } else if (v[2] < dd) {
            answer.push(idx + 1);
            return;
        } else {
            return;
        }
    });
    return answer;
}