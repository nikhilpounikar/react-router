import { BrowserRouter,Route,Routes } from "react-router-dom";
import Hero from "./pages/app/hero/Hero";
import Nav from "./components/nav/Nav";
import Courses from "./pages/app/courses/Courses";
import { useState } from "react";

function App() {
  const [isCourses,setIsCourser] = useState(false);
  return (<BrowserRouter>
    <Routes>
      <Route path="/" element={<Nav />} />
      <Route path="/hero/*" element={<Hero />} />
      <Route path="/courses/*" element={<Courses couses={isCourses} />} />
    </Routes>
  </BrowserRouter>)
}

export default App;
