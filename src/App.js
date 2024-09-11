
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
import Skill from './components/Skill';
import Project from './components/Project';
import Dashboard from './components/Dashboard';
import Contact from './components/Contact';
function App() {
  return (
    <div className="App">
      <div className='container'>
          <div><Header/></div>
          <div><Main/></div>
          <div><About/></div>
          <div><Skill/></div>
          <div><Project/></div>
          <div><Dashboard/></div>
          <div><Contact/></div>
      </div>
    </div>
  );
}

export default App;
