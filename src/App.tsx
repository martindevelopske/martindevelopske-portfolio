import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Resume from "./pages/Resume";
import { ThemeProvider } from "./contexts/ThemeContext";
import ProjectsPage from "./pages/Projects";

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
    {
      path: "/projects",
      element: <ProjectsPage />,
    },
  ]);
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
