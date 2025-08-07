function solution(players, callings) {
    const map = new Map();
    players.forEach((value, idx) => map.set(value, idx));
    for (const name of callings) {
        const index = map.get(name);
        const player = players[index];
        players[index] = players[index - 1];
        players[index - 1] = player;
        map.set(players[index - 1], index - 1);
        map.set(players[index], index);
    }
    return players;
}