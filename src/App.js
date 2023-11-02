import Hero from "./pages/app/hero/Hero";
import Nav from "./components/nav/Nav";
import Details from "./pages/app/details/Details";
import Courses from "./pages/app/courses/Courses";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const browerRouter = createBrowserRouter([
    {
      path: "/",
      element: <Nav />,
      children: [
        { path: "", element: <Hero /> },
        {
          path: "/courses",
          children: [
            { path: "", element: <Courses /> },
            { path: ":courseId", element: <Details /> },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={browerRouter}></RouterProvider>;
}

export default App;
