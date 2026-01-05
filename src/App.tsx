import { createHashRouter, RouterProvider } from "react-router";
import Homepage from "./pages/Homepage";

const router = createHashRouter([
  {
    path: "/",
    element: <Homepage />
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
