
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Hero';
import About from './components/About';
import Experiance from './components/Experiance'
import MySkills from './components/Myskills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Experiance/>
      <MySkills/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
