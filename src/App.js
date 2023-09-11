import './App.css';
import MyNavbar from "./components/Navbar/Navbar";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/about";

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
            </Routes>
        </Router>

    </div>
  );
}

export default App;
