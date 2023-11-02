import Hero from "./pages/app/hero/Hero";
import Nav from "./components/nav/Nav";
import Courses from "./pages/app/courses/Courses";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {

  const browerRouter = createBrowserRouter([
    {
      path: "/",
      element: <Nav />,
      children:[
        {path:"", element:<Hero/>},
        {path:"/courses",element:<Courses />}
      ]
    }

  ]);

  return (
    <RouterProvider router={browerRouter}></RouterProvider>
  );
}

export default App;
