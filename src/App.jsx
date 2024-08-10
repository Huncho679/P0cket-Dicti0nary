import "./index.css";
import AppLayout from "./AppLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
