function solution(n, m, section) {
    let result = 0;
    const wall = new Array(section[section.length - 1]).fill(false);
    section.forEach(v => wall[v] = true);
    for (let i = 0; i < wall.length; i++) {
        if (wall[i]) {
            for (let j = i; j < i + m; j++) {
                if (wall[j]) wall[j] = false;
            }
            result++;
        }
    }
    return result;
}