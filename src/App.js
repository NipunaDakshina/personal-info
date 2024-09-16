import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Dashboard from "./components/Dashboard";
import Contact from "./components/Contact";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <div className="container">
        <div>
          <Header />
        </div>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/skill" element={<Skill />}></Route>
          <Route path="/project" element={<Project />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
