function solution(strings, n) {
    return strings.sort((a, b) => {
        if (a.at(n).charCodeAt() === b.at(n).charCodeAt()) {
            const len = Math.min(a.length, b.length);
            for (let i = 0; i < len; i++) { 
                if (a.at(i).charCodeAt() != b.at(i).charCodeAt()) {
                    return a.at(i).charCodeAt() - b.at(i).charCodeAt()
                }
            }
            return len === a.length ? -1 : 1;
        }
        return a.at(n).charCodeAt() - b.at(n).charCodeAt();
    });
}