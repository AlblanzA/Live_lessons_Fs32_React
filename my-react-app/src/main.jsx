import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom"
import App from './App';
import Contatti from './Contatti';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "about",
    element: <div>About</div>,
  },
  {
    path: "contatti",
   element: <Contatti/>,
  },
]);

// lo <StrictMode> lo utilizziamo per la fase di sviluppo e di test per mostrare gli errori
createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
 
)
