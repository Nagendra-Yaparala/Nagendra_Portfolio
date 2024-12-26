
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Hero';
import About from './components/About';
import Experiance from './components/Experiance'
import MySkills from './components/Myskills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useState } from 'react';
import Projects from './components/Projects';

function App() {

  const [searchQuery,setSearchQuery] = useState("");

  return (
    <div className="App">
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      <Home  searchQuery={searchQuery}/>
      <About  searchQuery={searchQuery}/>
      <Experiance  searchQuery={searchQuery}/>
      <MySkills  searchQuery={searchQuery}/>
      <Projects/>
      <Contact  searchQuery={searchQuery}/>
      <Footer  searchQuery={searchQuery}/>
    </div>
  );
}

export default App;
