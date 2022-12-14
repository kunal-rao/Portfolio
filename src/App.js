import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home'
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';


function App() {
  return (
    <>
     <Navbar/>
     <Home />
     <Skills/>
     <Projects/>
     <Contact/>
    </>
  );
}

export default App;
