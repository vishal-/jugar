import { Link } from 'react-router'
import bgHome from '../assets/bg_home.png'
import ticTacToeIcon from '../assets/icons/tic_tac_toe.png'
import tambolaIcon from '../assets/icons/tambola.png'

function Homepage() {
  return (
    <div className="min-h-screen p-4 max-w-md mx-auto bg-cover bg-center" style={{ backgroundImage: `url(${bgHome})` }}>
      <h1 className="text-3xl font-bold mb-6 text-center">Games</h1>
      <div className="grid grid-cols-3 gap-4">
        <Link to="/tic-tac-toe" className="flex flex-col items-center gap-2">
          <img src={ticTacToeIcon} alt="Tic Tac Toe" className="w-20 h-20 rounded-2xl shadow-lg" />
          <span className="text-sm font-semibold text-center text-gray-900">Tic Tac Toe</span>
        </Link>
        <Link to="/tambola" className="flex flex-col items-center gap-2">
          <img src={tambolaIcon} alt="Tambola" className="w-20 h-20 rounded-2xl shadow-lg" />
          <span className="text-sm font-semibold text-center text-gray-900">Tambola</span>
        </Link>
      </div>
    </div>
  )
}

export default Homepage
