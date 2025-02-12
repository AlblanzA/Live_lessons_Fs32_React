import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./Pages/App";
import Contatti from "./Pages/Contatti";
import StarWars from "./Pages/StarWars";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about",
    element: <div>About</div>,
  },
  {
    path: "contatti",
    element: <Contatti />,
  },
  {
    path: "StarWars",
    element: <StarWars />,
  },
  {
    path: "HarryPotter",
    element: <App />,
  },
  {
    path:"Login",
    element:<Login/>

  },
  {
    path:"Register",
    element:<Register/>

  }

]);

// lo <StrictMode> lo utilizziamo per la fase di sviluppo e di test per mostrare gli errori
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
