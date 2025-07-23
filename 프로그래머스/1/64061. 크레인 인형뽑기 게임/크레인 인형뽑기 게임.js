function solution(board, moves) {
    const arr = [];
    return moves.reduce((result, move) => {
        const x = move - 1;
        for (let y = 0; y < board[x].length; y++) {
            // 인형 있는지 확인
            const number = board[y][x];
            // 없으면 한칸 내려가서 확인
            if (!number) continue;
            // 뽑힌 인형은 0으로 처리
            board[y][move- 1] = 0;
            // 마지막 인형과 뽑힌 인형이 같으면 인형 2개 제거 후 result에 1 더하기
            if (arr[arr.length - 1] === number) {
                arr.pop();
                result += 2;
            // 다르면 뽑힌 인형 목록에 새로운 인형 추가
            } else {
                arr.push(number);
            }
            // 인형이 뽑혔으므로 다음 move로 이동
            break;;
        }
        return result;
    }, 0);
}