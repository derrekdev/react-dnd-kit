import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Header from "./components/Header/Header.jsx";
import "./index.css";
import Basic1 from "./page/Basic1.jsx";
import Basic2 from "./page/Basic2.jsx";
import Basic3 from "./page/Basic3.jsx";
import DragOverlayBasic from "./page/DragOverlayBasic.jsx";
import DropOnCorrect from "./page/DropOnCorrect.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/basic", element: <Basic1 /> },
  { path: "/basic2", element: <Basic2 /> },
  { path: "/basic3", element: <Basic3 /> },
  { path: "/droponcorrect", element: <DropOnCorrect /> },
  { path: "/dragoverlay", element: <DragOverlayBasic /> },
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
