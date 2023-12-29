import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import NavBar from "./components/NavBar.jsx";
import About from "./components/common/About.jsx";
import Contact from "./components/common/Contact.jsx";
import Messages from "./components/common/Messages.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/messages",
    element: <Messages />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
