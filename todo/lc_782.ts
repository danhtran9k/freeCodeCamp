function movesToChessboard(board: number[][]): number {
    return 0
}

const scanPattern = (board: number[][]) => {
    let size = board.length
    let isEvenSize = size % 2 === 0

    let zeroCount = 0
    let oneCount = 0
    let pattern = ''
    let inv_pattern = ''

    for (const num of board[0]) {
        if (num === 1) {
            oneCount++
            pattern += '1'
            inv_pattern += '0'
        } else {
            zeroCount++
            pattern += '0'
            inv_pattern += '1'
        }
    }

    return {
        size,
        isEvenSize,
        zeroCount,
        oneCount,
        pattern,
        inv_pattern
    }
}

const validCheck = (board: number[][]) => {
    const INVALID = -1
    const { size, isEvenSize, zeroCount, oneCount, pattern, inv_pattern } =
        scanBoard(board)

    if (isEvenSize && zeroCount !== oneCount) return INVALID
    if (!isEvenSize && Math.abs(zeroCount - oneCount) !== 1) return INVALID

    let patternCount = 0
    let inv_patternCount = 0

    for (const row of board) {
        const rowStr = row.join('')
        if (rowStr === pattern) {
            patternCount++
        } else if (rowStr === inv_pattern) {
            inv_patternCount++
        } else {
            // nếu có pattern thứ 3 -> FALSE ngay lập tức
            return INVALID
        }
    }
}
