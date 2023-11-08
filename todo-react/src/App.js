import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import "./App.css";
import Dashboard from "./pages/Dashboard/Index";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="about">About Us</Link>
      </div>
    ),
  },
  {
    path: "Todo",
    element: <Dashboard />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
