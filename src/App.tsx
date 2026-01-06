import { createHashRouter, RouterProvider } from "react-router";
import Homepage from "./pages/Homepage";
import TicTacToe from "./games/TicTacToe";

const router = createHashRouter([
  {
    path: "/",
    element: <Homepage />
  },
  {
    path: "/tic-tac-toe",
    element: <TicTacToe />
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
