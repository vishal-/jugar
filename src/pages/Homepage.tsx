import { Link } from 'react-router'

function Homepage() {
  return (
    <div className="min-h-screen p-4 max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Games</h1>
      <div className="flex flex-col gap-3">
        <Link
          to="/tic-tac-toe"
          className="block p-4 bg-gray-800 rounded-lg hover:bg-gray-700 text-center font-semibold"
        >
          Tic Tac Toe
        </Link>
        <Link
          to="/tambola"
          className="block p-4 bg-gray-800 rounded-lg hover:bg-gray-700 text-center font-semibold"
        >
          Tambola
        </Link>
      </div>
    </div>
  )
}

export default Homepage
