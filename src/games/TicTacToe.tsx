import { useState } from 'react'
import Header from '../components/common/Header'

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
    <>
      <Header />
      <div className="min-h-screen p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Tic Tac Toe</h1>
      <div className="text-xl text-center mb-4">
        {winner ? `Winner: ${winner}` : `Next: ${isX ? 'X' : 'O'}`}
      </div>
      <div className="grid grid-cols-3 gap-2 mb-4">
        {board.map((cell, i) => (
          <button
            key={i}
            onClick={() => handleClick(i)}
            className="aspect-square bg-gray-800 text-4xl font-bold border-2 border-gray-700 hover:bg-gray-700 rounded-lg"
          >
            {cell}
          </button>
        ))}
      </div>
      <button onClick={reset} className="w-full py-3 bg-gray-700 hover:bg-gray-600 rounded-lg font-semibold">
        Reset
      </button>
      </div>
    </>
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
