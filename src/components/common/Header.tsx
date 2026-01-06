import { Link } from 'react-router'

function Header() {
  return (
    <header className="bg-gray-800 p-4 mb-4">
      <div className="max-w-md mx-auto flex items-center">
        <Link to="/" className="text-sky-blue hover:text-sky-blue-300 font-semibold">
          ← Home
        </Link>
      </div>
    </header>
  )
}

export default Header
