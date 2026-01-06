import { useState } from 'react'
import Header from '../components/common/Header'

function Tambola() {
  const [calledNumbers, setCalledNumbers] = useState<number[]>([])
  const [currentNumber, setCurrentNumber] = useState<number | null>(null)

  const callNumber = () => {
    const remaining = Array.from({ length: 90 }, (_, i) => i + 1).filter(
      n => !calledNumbers.includes(n)
    )
    if (remaining.length === 0) return
    const num = remaining[Math.floor(Math.random() * remaining.length)]
    setCurrentNumber(num)
    setCalledNumbers([...calledNumbers, num])
  }

  const reset = () => {
    setCalledNumbers([])
    setCurrentNumber(null)
  }

  return (
    <>
      <Header />
      <div className="min-h-screen p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Tambola</h1>
      
      <div className="bg-gray-800 rounded-lg p-6 mb-4 text-center">
        <div className="text-6xl font-bold text-sky-blue mb-2">
          {currentNumber || '-'}
        </div>
        <div className="text-sm text-gray-400">
          {calledNumbers.length}/90 called
        </div>
      </div>

      <div className="flex gap-2 mb-4">
        <button
          onClick={callNumber}
          disabled={calledNumbers.length === 90}
          className="flex-1 py-3 bg-sky-blue text-gray-900 font-bold rounded-lg disabled:opacity-50"
        >
          Call Number
        </button>
        <button
          onClick={reset}
          className="px-6 py-3 bg-gray-700 rounded-lg"
        >
          Reset
        </button>
      </div>

      <div className="grid grid-cols-9 gap-1">
        {Array.from({ length: 90 }, (_, i) => i + 1).map(num => (
          <div
            key={num}
            className={`aspect-square flex items-center justify-center text-xs rounded ${
              calledNumbers.includes(num)
                ? 'bg-sky-blue text-gray-900 font-bold'
                : 'bg-gray-800 text-gray-500'
            }`}
          >
            {num}
          </div>
        ))}
      </div>
      </div>
    </>
  )
}

export default Tambola
