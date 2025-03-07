// 크레인 인형뽑기 게임
// 프로그래머스 1단계

function solution(board, moves) {
    const basket = [];
    let result = 0;
    moves.forEach(v => {
        for (let i = 0; i < board.length; i++) {
            if (board[i][v - 1] !== 0) {
                basket.push(board[i][v - 1]);
                board[i][v - 1] = 0;
                if (basket.length >= 2 && basket[basket.length - 1] === basket[basket.length - 2]) {
                    basket.splice(basket.length - 2, 2);
                    result += 2;
                }
                break;
            }
        }
    });
    return result;
}

// 추가로 배울 점
const transpose = matrix =>
    matrix.reduce(
        (result, row) => row.map((_, i) => [...(result[i] || []), row[i]]),
        []
    );
// 행렬 전치 함수 (행과 열을 뒤집음)