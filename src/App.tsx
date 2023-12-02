import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Resume from "./sections/Resume";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/resume",
      element: <Resume />,
    },
  ]);
  return <RouterProvider router={router} />;
}
