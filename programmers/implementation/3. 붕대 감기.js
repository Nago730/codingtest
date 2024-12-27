// 붕대 감기
// 프로그래머스 1단계

function solution(bandage, health, attacks) {
    let currTime = 0;
    let currHealth = health;
    for (const [attackTime, damage] of attacks) {
        let diffTime = attackTime - currTime - 1;
        currHealth += diffTime * bandage[1] + Math.floor(diffTime / bandage[0]) * bandage[2];
        if (currHealth > health) currHealth = health;
        currHealth -= damage;
        if (currHealth <= 0) return -1;
        currTime += diffTime + 1;
    }
    return currHealth;
}