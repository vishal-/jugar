import { createHashRouter, RouterProvider } from "react-router";
import Homepage from "./pages/Homepage";
import TicTacToe from "./games/TicTacToe";
import Tambola from "./games/Tambola";

const router = createHashRouter([
  {
    path: "/",
    element: <Homepage />
  },
  {
    path: "/tic-tac-toe",
    element: <TicTacToe />
  },
  {
    path: "/tambola",
    element: <Tambola />
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
