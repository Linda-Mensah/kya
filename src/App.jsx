import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import About from "./pages/About";
import Programs from "./pages/Programs";
import Join from "./pages/Join";
import Home from "./pages/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },

    {
      path: "/about",
      element: <About />,
    },

    {
      path: "/programs",
      element: <Programs />,
    },

    {
      path: "/join",
      element: <Join />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
