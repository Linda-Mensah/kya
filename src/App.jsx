import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import About from "./pages/About";
import Programs from "./pages/Programs";
import Join from "./pages/Join";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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

    {
      path: "/contact",
      element: <Contact />,
    },

    {
      path: "/nav",
      element: <Navbar />,
    },

    {
      path: "footer",
      element: <Footer />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
