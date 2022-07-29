import './App.css';
import { Routes, Route} from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About';
import Navbar from './components/Home/Navbar';
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='home' element={<Home/>}></Route>
        <Route path='about' element={<About/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
