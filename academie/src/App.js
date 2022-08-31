import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import Copii from './Pages/Copii';




function App() {
    return (
      <Router>
      <div className="App">
        <ScrollToTop>
            <Navbar/>
        <Routes>
          <Route exact path='/' element = {<><Home/></>}/>
          <Route exact path='/Copii' element = {<><Copii/></>}/>
          </Routes>
        </ScrollToTop>
      </div>
      </Router>
    );
  }


export default App;