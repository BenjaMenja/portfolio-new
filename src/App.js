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
import Resume from "./pages/Resume";
import MergeMonastery from "./pages/mergemonastery";
import Gallery from "./pages/gallery";
import ColorClash from "./pages/colorclash";
import MiniProjects from "./pages/miniprojects";

function App() {
  return (
    <div className="App">
        <div className={"content"}>
            <Router>
                <MyNavbar />
                <Routes>
                    <Route exact path={'/'} element={<Home />}/>
                    <Route exact path={'/about'} element={<About /> }/>
                    <Route exact path={'/projects'} element={<Projects />}/>
                    <Route exact path={'/game-engine'} element={<Dragonfly />}/>
                    <Route exact path={'/pokemon-blitz'} element={<PokemonBlitz />}/>
                    <Route exact path={'/royal-siege'} element={<RoyalSiege />}/>
                    <Route exact path={'/the-great-escape'} element={<TheGreatEscape />}/>
                    <Route exact path={'/merge-monastery'} element={<MergeMonastery />} />
                    <Route exact path={'/color-clash'} element={<ColorClash />} />
                    <Route exact path={'/mini-projects'} element={<MiniProjects />} />
                    <Route exact path={'/royal-siege-gallery'} element={<Gallery />} />
                    <Route exact path={'/resume'} element={<Resume />}/>
                </Routes>
            </Router>
        </div>
        <FooterBar />
    </div>
  );
}

export default App;
