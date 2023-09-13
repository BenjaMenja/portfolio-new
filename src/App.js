import './App.css';
import MyNavbar from "./components/Navbar/Navbar";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/about";
import Projects from "./pages/projects";
import Dragonfly from "./pages/dragonfly";
import PokemonBlitz from "./pages/pokemonblitz";
import RoyalSiege from "./pages/royalsiege";
import TheGreatEscape from "./pages/thegreatescape";
import FooterBar from "./components/FooterBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
        <Router>
            <MyNavbar />
            <Routes>
                <Route exact path={'/'} element={<Home />}/>
                <Route exact path={'/about'} element={<About /> }/>
                <Route exact path={'/projects'} element={<Projects />}/>
                <Route exact path={'/dragonfly'} element={<Dragonfly />}/>
                <Route exact path={'/pokemon-blitz'} element={<PokemonBlitz />}/>
                <Route exact path={'/royal-siege'} element={<RoyalSiege />}/>
                <Route exact path={'/the-great-escape'} element={<TheGreatEscape />}/>
            </Routes>
        </Router>
        <FooterBar />
    </div>
  );
}

export default App;
