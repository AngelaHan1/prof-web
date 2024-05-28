import './App.css';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Extra from './components/Extra';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App"> 
      <Navigation/>
      <div className="profile-container">
      <Profile/>
      </div>
      <Skills/>
      <Experience/>
      <Extra/>
      <Contact/>
    </div>
  );
}

export default App;


