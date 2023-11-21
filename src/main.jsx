import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Header from "./components/Header/Header.jsx";
import "./index.css";
import Basic2 from "./page/Basic2.jsx";
import Basic3 from "./page/Basic3.jsx";
import Basic from "./page/basic.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/basic", element: <Basic /> },
  { path: "/basic2", element: <Basic2 /> },
  { path: "/basic3", element: <Basic3 /> },
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
