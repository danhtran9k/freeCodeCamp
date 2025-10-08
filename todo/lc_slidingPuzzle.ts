// function slidingPuzzle(board: number[][]): number {
//     const { TARGET, getState } = setup(board)
//     const { board: INIT_STATE, x, y } = getState(board)
//     const queue = [INIT_STATE]
//     const visited = new Set<string>()

//     visited.add(INIT_STATE)

//     let steps = 0

//     while (queue.length) {
//         const state = queue.shift()
//         if (state === TARGET) return steps

//         const nextStates = getNextStates(state)
//     }
// }

// const setup = (board: number[][]) => {
//     const row = 2
//     const col = 3
//     const TARGET = '123450'

//     const getState = (currBoard: number[][]) => {
//         const board = currBoard.flat().join('')
//         const ixZero = board.indexOf('0')
//         const x = ixZero % col
//         const y = Math.floor(ixZero / col)
//         return { board, x, y }
//     }
//     const directions = [
//         [1, 0],
//         [-1, 0],
//         [0, 1],
//         [0, -1]
//     ]
//     const isIn = (x: number, y: number) =>
//         x >= 0 && y >= 0 && x < row && y < col

//     return { directions, isIn, getState, TARGET }
// }
