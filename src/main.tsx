import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';





ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
    
  </React.StrictMode>
);

//import Root from "../src/routes/root.tsx";
//<RouterProvider router={router} />;

/*const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);*/