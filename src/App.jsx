import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Service from './Components/Service/Service';
import Certificate from './Components/Certificate/Certificate';
import Project from './Components/Porject/Porject';
import Skill from './Components/Skill/Skill'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/project" element={<Project />} />
        <Route path='/skills' element= {<Skill />} />
      </Routes>
    </Router>
  );
}

export default App;
