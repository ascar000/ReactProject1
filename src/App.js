import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Grid from './components/Grid';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header/>
      <Grid/>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;
