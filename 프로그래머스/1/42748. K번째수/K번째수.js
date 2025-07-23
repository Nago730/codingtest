function solution(array, commands) {
    return commands.reduce((result, curCommands) => {
        const [begin, end, index] = curCommands;
        result.push(array.slice(begin - 1, end).sort((a, b) => a - b)[index - 1]);
        return result;
    }, []);
}