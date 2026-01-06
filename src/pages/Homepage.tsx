import { Link } from 'react-router'

function Homepage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Homepage</h1>
      <Link to="/tic-tac-toe" className="text-sky-blue-300 hover:underline">
        Play Tic Tac Toe
      </Link>
    </div>
  )
}

export default Homepage
