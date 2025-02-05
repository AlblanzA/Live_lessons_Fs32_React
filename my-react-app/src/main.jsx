import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./Pages/App";
import Contatti from "./Pages/Contatti";
import StarWars from "./Pages/StarWars";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
]);

// lo <StrictMode> lo utilizziamo per la fase di sviluppo e di test per mostrare gli errori
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
