import { useState } from 'react'

function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [isX, setIsX] = useState(true)

  const winner = calculateWinner(board)

  const handleClick = (i: number) => {
    if (board[i] || winner) return
    const newBoard = board.slice()
    newBoard[i] = isX ? 'X' : 'O'
    setBoard(newBoard)
    setIsX(!isX)
  }

  const reset = () => {
    setBoard(Array(9).fill(null))
    setIsX(true)
  }

  return (
    <div className="flex flex-col items-center gap-4 p-8">
      <h1 className="text-3xl font-bold">Tic Tac Toe</h1>
      <div className="text-xl">
        {winner ? `Winner: ${winner}` : `Next: ${isX ? 'X' : 'O'}`}
      </div>
      <div className="grid grid-cols-3 gap-2">
        {board.map((cell, i) => (
          <button
            key={i}
            onClick={() => handleClick(i)}
            className="w-20 h-20 bg-sky-blue text-3xl font-bold border-2 border-sky-blue-700 hover:bg-sky-blue-300"
          >
            {cell}
          </button>
        ))}
      </div>
      <button onClick={reset} className="px-4 py-2 bg-thistle hover:bg-thistle-400 rounded">
        Reset
      </button>
    </div>
  )
}

function calculateWinner(board: (string | null)[]) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ]
  for (const [a, b, c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a]
    }
  }
  return null
}

export default TicTacToe
