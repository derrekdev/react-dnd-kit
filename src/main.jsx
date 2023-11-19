import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Header from "./components/Header/Header.jsx";
import "./index.css";
import Basic from "./page/basic.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/basic", element: <Basic /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <Header />
    <main className="main-container">
      <RouterProvider router={router} />
    </main>
  </React.StrictMode>
);
